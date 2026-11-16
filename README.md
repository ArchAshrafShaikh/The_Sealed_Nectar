# Sealed Nectar Stories

Stories from the life of the Prophet Muhammad ﷺ for a young child, retold from *The Sealed Nectar* (Ar-Raheeq Al-Makhtum) by Safiur-Rahman al-Mubarakpuri.

It is built for a child of 4 to 8, on a tablet. He hears each new story together with a parent the first time, and can open it alone after that. Nothing on his side needs reading: he taps a picture and hears the story in his parent's recorded voice. Each slide plays like a short film, then ends on a question, and he touches the answer in the picture to turn the page. Every story closes with a question to think about, the lesson in one sentence, a habit for the week and a short du'a.

- 15 stories: three short ones about what he was like (from hadith), then twelve from the Year of the Elephant to the first believers
- Every story in English and Urdu
- Places, animals and objects only. No person is drawn anywhere.
- No adverts, no links out, no accounts, nothing collected. Recordings and progress stay on the tablet.
- No music. Only soft tap sounds, wind by day and crickets by night, and these can be switched off.

## Put it on the tablet

1. Turn on GitHub Pages for this repository: **Settings → Pages → Deploy from a branch**, pick the branch and `/ (root)`, save. After a minute the site is at `https://<your-username>.github.io/The_Sealed_Nectar/`.
2. Open that address on the tablet in Safari (iPad) or Chrome (Android).
3. Add it to the home screen: **Share → Add to Home Screen** on iPad, or **⋮ → Add to Home screen** on Android. It then opens full screen and works without internet.
4. Keep him inside it: on iPad use **Guided Access** (Settings → Accessibility), on Android use **App pinning** (Settings → Security).

To try it on a computer first, run `python3 -m http.server` in this folder and open `http://localhost:8000`.

## The grown-ups' area

Press and hold the small round button in the top right corner for three seconds.

**Record your voice.** Pick a story and a language, and record each picture's text once, then the question to think about and the lesson. There is also one invitation, one opening (Bismillah) and one closing (salawat) per language, used for every story. He hears your recording every time. Where a part has no recording, the storyteller tells it.

**Read aloud.** The full text for the nights you tell it yourself, with the closing lesson, two questions to ask him, and where to check the story. Telling it yourself, in your own words, is better than any recording.

**Settings.**

| Setting | What it does |
|---|---|
| Language he hears | English or Urdu |
| Stories open to him | Starts at 1. Open one more each week; the rest stay grey on his path |
| Day or night look | Night is dimmer, for bedtime |
| Storyteller voice | The built-in narrator for parts you have not recorded |
| Sounds | Tap sounds and background wind or crickets, kept quiet under the voice |
| Read-along words | For about age 6 and up: shows the words and lights each one as it is said |
| Tell it back | For about age 6 and up: he records himself telling the story and plays it to you |
| Back up your recordings | Saves all recordings to one file, and restores them |
| His progress | Shows how many stories he has finished; can be reset |

Recordings live only in that browser on that tablet. Clearing the browser's data deletes them, so save a backup file after recording.

## How a story works for him

1. **A new story waits for you.** The first time he opens a story, it asks him to fetch a grown-up, and starts when the glowing button is pressed.
2. **While the voice is telling, nothing can be touched.** The picture moves by itself in step with the voice.
3. **Each slide ends on a question.** A small light drifts to the answer; he touches it and the page turns. Nothing he touches is ever wrong.
4. **The closing.** A "why" question, a few seconds of quiet, then the lesson, the week's habit and a du'a, and the salawat.
5. **The end screen** shows one question for you to ask him about his own life.
6. **From the second hearing on,** the other things in each picture can be touched too, once the telling has finished.

These choices follow the research in `reports/Teaching seerah to young children.md`.

## The storyteller's voice

Every story is narrated by a built-in storyteller (a warm woman's voice in English and in Urdu), so it speaks from the first tap. Wherever you record a part yourself, he hears your recording instead. The "Storyteller voice" switch in Settings turns the narrator off.

- The audio is in `voice/en/` and `voice/ur/`, one file per part, with `voice/manifest.json` holding each part's length and word timings.
- It is made by `tools/make_voice.py` from the story text, using Microsoft's neural voices through the free `edge-tts` tool.
- **If you change a story's wording, make its audio again:** `pip install edge-tts imageio-ffmpeg`, then `python3 tools/make_voice.py --only <story id>`, and raise `VERSION` in `sw.js`.
- If the English voice says a name wrongly, add a spelling for it to the `SAY_EN` list in that script and make the audio again.
- Opening a story while online saves its audio on the tablet, so it plays offline afterwards.

## Before you record

- **Read the Urdu through once.** It is a translation of the English retelling and has not been checked by a fluent reader. Change any wording you would say differently (in `stories/stories.js`).
- **Check the stories against the book.** They are short retellings for a small child, written in new words; nothing is copied from the book. Each story lists the part of the book it comes from. The first three stories are from hadith, not from the book, and list their references (Bukhari 6203; Abu Dawud 2549; Bukhari 707 and 709).
- Losses in his childhood are told briefly and gently. Battles and harder events are left for when he is older.

## How it grows with him

| Age | How this is used |
|---|---|
| 4 to 5 | He listens and taps. One new story a week, heard many times |
| 6 to 8 | Turn on read-along words and tell-it-back |
| 7 to 9 | The whole life in order, with maps and names (not built yet) |
| 10 to 13 | Reading chapters of the book together |
| 14 and up | Reading the book himself |

## Adding or changing a story

- Text: add an entry to `stories/stories.js` with a title, one text per picture in English and Urdu (each ending on a "find it" question), a why question, lesson, habit, du'a and two questions for the grown-up.
- Pictures: add an entry with the same `id` to `SN.art` in `scenes/scenes.js`, one line per picture, built from the backdrops and props defined in that file. Wrap the thing that answers the slide's question in `N(...)`; each picture needs exactly one.
- After any change, raise `VERSION` in `sw.js` so tablets fetch the new copy.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page |
| `styles.css` | Layout, colours for day, dusk, dawn and night, and every tap animation |
| `app.js` | Story path, story player and the grown-ups' area |
| `audio.js` | Recording, playback of recordings and the storyteller, device-voice fallback, sounds, backup |
| `tools/make_voice.py`, `voice/` | The script that makes the storyteller's audio, and the audio |
| `stories/stories.js` | All story text |
| `scenes/scenes.js` | All drawings |
| `sw.js`, `manifest.webmanifest`, `icons/` | Home-screen install and offline use |
