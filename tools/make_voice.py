#!/usr/bin/env python3
"""Make the storyteller's audio from the story text.

Reads stories/stories.js and writes one mp3 per part to voice/<lang>/, plus voice/manifest.json
with each part's length and the start time of every word.

    pip install edge-tts imageio-ffmpeg
    python3 tools/make_voice.py                      # everything, both languages
    python3 tools/make_voice.py --only bird          # one story
    python3 tools/make_voice.py --only shared        # the invitation, opening and closing
    python3 tools/make_voice.py --lang en --voice en-US-AvaNeural

Run it again after changing a story's wording. Needs node (to read the story file) and internet.
The voices are Microsoft's neural voices, reached through the free edge-tts tool.
"""
import argparse, asyncio, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICES = {"en": "en-US-AvaNeural", "ur": "ur-PK-UzmaNeural"}
RATE = {"en": "-14%", "ur": "-10%"}   # slower than normal speech
SR = 24000                            # samples per second
LEAD, GAP, BEFORE_QUESTION, TAIL = 0.30, 0.55, 1.00, 0.40   # seconds of quiet

# How to spell names for the English voice so it says them properly. The story text is not changed.
SAY_EN = {
    "Ka'bah": "Kaaba", "Qur'an": "Quran", "Rabi' al-Awwal": "Rabee al Awwal", "Jibril": "Jibreel",
    "Aminah": "Aaminah", "Halimah": "Haleemah", "Khadijah": "Khadeejah", "Madinah": "Madeenah",
    "Abu Umayr": "Abu Umair", "As-Sadiq": "As Saadiq", "Al-Amin": "Al Ameen", "Bahira": "Baheera",
    "Maysarah": "Maysara", "Hira": "Hiraa", "Abu Talib": "Abu Taalib", "du'a": "dua", "Bani Sa'd": "Bani Saad",
}


def load_parts():
    """Every part to be spoken: {lang: [(key, text), ...]} in story order."""
    js = ("global.window={};require(%r);const SN=window.SN;"
          "console.log(JSON.stringify({ritual:SN.ritual,stories:SN.stories}))" % os.path.join(ROOT, "stories", "stories.js"))
    data = json.loads(subprocess.check_output(["node", "-e", js]))
    parts = {}
    for lang in ("en", "ur"):
        p = [(k, data["ritual"][k][lang]) for k in ("together", "open", "close")]
        for s in data["stories"]:
            p += [(f"{s['id']}:{i}", sc[lang]) for i, sc in enumerate(s["scenes"])]
            p.append((f"{s['id']}:why", s["why"][lang]))
            p.append((f"{s['id']}:lesson", " ".join([s["lesson"][lang], s["habit"][lang], s["dua"][lang]])))
        parts[lang] = p
    return parts


def sentences(text):
    return [x.strip() for x in re.findall(r"[^.!?۔؟]+[.!?۔؟]*\s*", text) if x.strip()]


def is_question(sentence):
    return sentence.rstrip().endswith(("?", "؟")) or sentence.startswith(("Touch ", "Can you find"))


def ffmpeg():
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def to_pcm(mp3):
    return subprocess.run([ffmpeg(), "-v", "error", "-i", "pipe:0", "-f", "s16le", "-ac", "1", "-ar", str(SR), "pipe:1"],
                          input=mp3, stdout=subprocess.PIPE, check=True).stdout


def to_mp3(pcm, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    subprocess.run([ffmpeg(), "-v", "error", "-y", "-f", "s16le", "-ac", "1", "-ar", str(SR), "-i", "pipe:0", "-b:a", "48k", path],
                   input=pcm, check=True)


def quiet(seconds):
    return b"\x00\x00" * int(SR * seconds)


async def speak(text, voice, rate):
    """One sentence -> (pcm, [word start times in seconds])."""
    import edge_tts
    for attempt in range(4):
        try:
            proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy")  # only set on some networks
            try:
                com = edge_tts.Communicate(text, voice, rate=rate, proxy=proxy, boundary="WordBoundary")
            except TypeError:  # older edge-tts
                com = edge_tts.Communicate(text, voice, rate=rate, proxy=proxy)
            audio, times = b"", []
            async for ev in com.stream():
                if ev["type"] == "audio":
                    audio += ev["data"]
                elif ev["type"] == "WordBoundary":
                    times.append(ev["offset"] / 1e7)
            if audio:
                return to_pcm(audio), times
        except Exception as e:  # network hiccup: wait and try again
            err = e
        else:
            err = 'no audio returned'
        await asyncio.sleep(2 + attempt * 3)
    raise RuntimeError(f"could not make audio for: {text[:60]} ({err})")


async def make_part(text, lang, voice, rate):
    """A whole part -> (pcm, seconds, [start time of each word of the original text])."""
    pcm, words = quiet(LEAD), []
    sents = sentences(text)
    for i, sent in enumerate(sents):
        say = sent
        if lang == "en":
            for a, b in SAY_EN.items():
                say = say.replace(a, b)
        if i:
            pcm += quiet(BEFORE_QUESTION if (i == len(sents) - 1 and is_question(sent)) else GAP)
        start = len(pcm) / 2 / SR
        audio, times = await speak(say, voice, rate)
        n, length = len(sent.split()), len(audio) / 2 / SR
        if len(times) == n:                      # the voice reported one time per word
            words += [round(start + t, 2) for t in times]
        else:                                    # otherwise spread the words by their length
            ws, total, acc = sent.split(), sum(len(w) + 1 for w in sent.split()), 0
            for w in ws:
                words.append(round(start + length * acc / total, 2)); acc += len(w) + 1
        pcm += audio
    pcm += quiet(TAIL)
    return pcm, round(len(pcm) / 2 / SR, 2), words


async def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--lang", choices=["en", "ur"], action="append")
    ap.add_argument("--voice", help="voice name, when making one language")
    ap.add_argument("--only", help="make only this story id (for example: bird)")
    ap.add_argument("--out", default=os.path.join(ROOT, "voice"))
    ap.add_argument("--joined", help="also write the chosen parts as one file here (for samples)")
    a = ap.parse_args()
    parts = load_parts()
    mpath = os.path.join(a.out, "manifest.json")
    manifest = json.load(open(mpath)) if os.path.exists(mpath) else {}
    for lang in a.lang or ["en", "ur"]:
        voice = a.voice or VOICES[lang]
        todo = [(k, t) for k, t in parts[lang] if not a.only or k.split(":")[0] == a.only or (a.only == "shared" and ":" not in k)]
        m = manifest.setdefault(lang, {})
        joined = b""
        for n, (key, text) in enumerate(todo, 1):
            pcm, dur, words = await make_part(text, lang, voice, RATE[lang])
            to_mp3(pcm, os.path.join(a.out, lang, key.replace(":", "_") + ".mp3"))
            m[key] = {"d": dur, "w": words}
            joined += pcm + quiet(0.8)
            print(f"{lang} {n}/{len(todo)} {key} {dur}s", flush=True)
        manifest.setdefault("voices", {})[lang] = voice
        if a.joined:
            to_mp3(joined, a.joined)
    os.makedirs(a.out, exist_ok=True)
    json.dump(manifest, open(mpath, "w"), ensure_ascii=False, separators=(",", ":"))


if __name__ == "__main__":
    asyncio.run(main())
