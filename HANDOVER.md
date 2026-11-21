# Handover: where this project stands

Written on 20 November 2026 so a new session can continue without the earlier conversation.

## The goal

The owner has young children (one is 4; the others' ages are not yet known) who are glued to YouTube. He wants something they enjoy in the same way, that feels like YouTube, and that benefits them: stories from the life of the Prophet Muhammad ﷺ, based on *The Sealed Nectar* (Ar-Raheeq Al-Makhtum).

## The current direction

The direction changed late in the last session, from an interactive storybook to **watchable episodes**.

1. **YouTube Kids in "Approved content only" mode** is the quick fix for the YouTube habit: the parent hand-picks videos and the children see only those. The owner sets this up himself. No building needed.
2. **Our own seerah episodes** are short films: AI-generated illustrated clips (made on Higgsfield), cut to a storyteller's narration with natural sound. No music.
3. **This site** becomes the home for those episodes: a simple row of videos to tap and watch. The existing interactive stories stay available for when a parent sits with the child.

The owner planned to connect his **Higgsfield MCP** as a connector and start a new session, so that the pictures and clips can be generated from here.

## Update, 21 November 2026: the show's format

The owner now wants a **YouTube channel that teaches the seerah to children without them noticing they are being taught**. Decisions so far:

- **Episode format, about four minutes:** (1) a child-sized problem in modern daily life, in the manner of Omar & Hana; (2) "that reminds me of something that really happened": the seerah story, told around one thing from it that is animated (the camel, the scales, the cloth); (3) back to today, where the character acts on it. The thing is shown and animated while the storyteller tells what happened; it does not speak.
- **Each episode carries one or two qualities** from a list drawn from the seerah. Season one is twelve episodes using stories already written here: noticing little ones (the little bird), kindness to animals (the camel), noticing how others feel (the gentle prayer), trusting Allah (the Elephant), thankfulness (Halimah), caring for someone alone (grandfather's mat), helping and patience (the shepherd), truthfulness (Al-Amin), fairness (the honest trader), sharing and peacemaking (the Black Stone), quiet time and sharing (Hira), love of learning and comforting ("Read!").
- **The present-day characters are drawn children and their family.** Nobody from the seerah is ever shown.
- **Visual direction:** flat 2D picture-book style, soft rounded shapes, warm sand and gold with deep blue nights, big heads and large eyes, shots held five to eight seconds, thumbnails with one face and one object and no words.
- **The cast (fictional names):** two leads, Zayn (a boy of 4, the one with the problem and the questions) and Noor (his cousin, a girl of 6). Supporting: Zara (a girl of 3, the little cousin) and Sami (a boy of 2, Zayn's brother). Abba (grandfather) is the storyteller, with Dadi (grandmother) alongside. The boys' mother and father appear briefly. Also a school friend and the family cat. The mother and Dadi wear a headscarf outdoors only; the girls do not.
- **The characters are inspired by the owner's own family, from photos he shares in the conversation.** Work from written descriptions of the photos. Do not save the photos, real names or real ages in this repository (it is public), and advise against uploading the photos to Higgsfield.
- **Setting:** Abba and Dadi's home, on the terrace of a building in a busy city, with a big garden and a playground. The cousins are together there most days. The building is a high-rise; its lobby and lifts are used when an episode needs the children to meet other people (neighbours, the guard, a new child).
- **Characters come before the script.** The cast is being settled first; then character sheets on Higgsfield; then the pilot script (episode 2, the camel).
- Research found YouTube is under pressure over AI-made children's videos and that YouTube Kids admits few such channels. Advice given: start unlisted, make few episodes that are clearly hand-shaped, and read YouTube's current policies before going public.

## Rules that must always hold

- **Nobody from the seerah is ever shown.** Not the Prophet ﷺ, his family, companions, or anyone else in the events. No figures, faces, hands, shadows or silhouettes of them. Seerah scenes show places, animals and objects only, shot from where he stands, so things respond to someone out of view. The show's own present-day family is drawn (see the update above).
- **No music.** Voice and natural sound only (wind, birds, animals, footsteps).
- **Fidelity to sources.** Retell in new words; do not copy the book's text; do not invent events or dialogue. Each story lists its source.
- **Calm pacing.** No autoplay chains, streaks, rewards for time spent, adverts or links out.
- **Honorifics** throughout (ﷺ, "may Allah be pleased with him/her").
- Battles and harder events are left out for now; deaths in his childhood are told briefly and gently.

## Working with Higgsfield

- **The Higgsfield connector is view-only.** It appeared in the last session after this file was first written. It can list models, show the owner's past generations and check his credit balance, but its own instructions say it cannot generate media or upload files. So the owner runs the prompts himself on Higgsfield; from here you can look at his results with it.
- Confirmed in his catalog on 20 November 2026: Nano Banana Pro (pictures, takes reference images), and for video Seedance 2.0 and 2.5 and Cinema Studio Video 3.0, all of which take a start image and have a switch to turn generated audio off. The second page of the video list was not read, so Kling may be on it.
- **Still pictures:** Nano Banana Pro (it accepts a reference image, which keeps an animal or place consistent across shots).
- **Motion:** Kling 3.0, image-to-video. Always make the picture first, choose the best, then animate it.
- Model versions change often; use the newest of each.
- Settings: 16:9, highest resolution available, 5–8 seconds per clip, sound off.
- **Every generation spends the owner's credits.** Generate one shot, show him, and continue only when he says so.
- **Checking for people:** look at every still picture before animating it. Video cannot be watched from here, so the owner must check each clip for figures or hands appearing partway through. Reject and regenerate any that show a person, a hand, a human shadow, or any writing.

## The pilot episode: "The camel that cried"

Source: Sunan Abi Dawud 2549 (graded sahih), from Abdullah ibn Ja'far. Story id in the code: `camelcry`. Narration text is in `stories/stories.js`.

Eight shots, about one minute. Style block to put at the start of every picture prompt:

```
Hand-painted children's picture-book illustration, soft gouache texture, visible brushwork, warm golden-hour light, gentle muted colours, simple rounded shapes. Setting: a date-palm garden in 7th-century Madinah, Arabia. Wide 16:9 composition. Absolutely no people, no human figures, no faces, no hands, no shadows or silhouettes of people. No text, no writing, no symbols.
```

For shots 3–8, attach the chosen shot 2 picture as the reference image.

| Shot | Picture prompt (after the style block) | Motion prompt (image-to-video) |
|---|---|---|
| 1 | Wide view of a walled palm garden seen from outside, a low mud-brick wall with an open wooden gate, a sandy path leading in, tall date palms beyond, long evening shadows. | Slow, steady camera push forward through the open gate. Palm fronds sway gently in a light breeze. Nothing else moves. |
| 2 | Inside the garden: a single thin, tired camel standing alone under the palms, head hanging low, ribs faintly visible, a worn rope halter, dappled light on the sand. | Camera drifts slowly toward the camel. It shifts its weight and its ears twitch. Calm, slow movement. |
| 3 | Extreme close-up of the camel's face in profile, one large dark eye with long lashes, a single tear on its cheek, soft light. | A tear rolls slowly down the camel's cheek. One slow blink. Camera almost still. |
| 4 | Medium shot: the camel has lifted its head and looks straight toward the viewer with ears forward, as if someone it trusts has just arrived. Palms behind. | The camel slowly raises its head and looks into the camera. Gentle breathing. Camera still. |
| 5 | Close-up: the camel's head lowered and peaceful, eyes half closed, as if being comforted by someone out of frame. Warm light across its face. No hand visible. | The camel slowly closes its eyes and its breathing becomes slow and calm. Very small movements only. |
| 6 | Detail shot on the ground: an empty wooden feeding trough, a dry water bucket, and a pile of heavy loaded sacks with a worn rope beside them. | Slow tilt across the empty trough to the heavy sacks. Dust motes float in the light. |
| 7 | Medium shot: the same trough now full of fresh green fodder and a bucket full of water; the camel eating contentedly, looking healthier. | The camel chews slowly and flicks its tail. A few leaves stir in the breeze. Camera still. |
| 8 | Wide sunset view of the garden, the camel resting on folded legs under the palms, peaceful, a few birds high in an orange and violet sky. | Slow camera pull back and up. Birds cross the sky. Palms sway gently. |

Shot 5 is the one most likely to come back with a hand in it.

### Assembling the episode

1. Narration: make the `camelcry` audio with `python3 tools/make_voice.py --only camelcry` (see below). Parts are the three slides, the "why" question and the lesson, in English and Urdu. `voice/manifest.json` gives each part's length.
2. Cut the eight clips to the narration so each shot matches what is being said; slow or hold clips where the narration is longer. `imageio-ffmpeg` provides ffmpeg.
3. Strip any audio the video model added. Add natural sound only.
4. Open with the Bismillah part and close with the salawat part (`voice/<lang>/open.mp3`, `close.mp3`).
5. Deliver one finished file in English and one in Urdu, and add an episodes row to the site.

If the pilot looks right on the tablet, write prompt packs for the other stories in the same form.

## What already exists

**Live site:** https://archashrafshaikh.github.io/The_Sealed_Nectar/ (GitHub Pages, served from this branch; the repository is public).

**The interactive story app** (plain HTML, CSS and JavaScript, no build step):

- 15 stories, 71 slides, in English and Urdu. Three "meet him" stories from hadith (`bird`, `camelcry`, `prayer`), then twelve from the Year of the Elephant to the first believers.
- Each slide plays as a short film in step with the voice, then ends on a "find it" question; touching the answer turns the page. Nothing can be touched while the voice is speaking.
- Each story closes with a "why" question, a silence, then the lesson, the week's habit and a du'a.
- A new story waits for a grown-up the first time it is opened.
- A grown-ups' area (hold the top-right button for three seconds): record your own voice, read-aloud text, settings.
- Installs to the home screen and works offline.

| File | Purpose |
|---|---|
| `index.html`, `styles.css`, `app.js` | The page, styling and animations, and the app logic |
| `audio.js` | Recordings, storyteller playback, sounds, backup |
| `stories/stories.js` | All story text |
| `scenes/scenes.js` | All drawings, made in code from simple shapes |
| `tools/make_voice.py` | Makes the storyteller's audio from the story text |
| `voice/` | Storyteller audio and `manifest.json` |
| `sw.js`, `manifest.webmanifest`, `icons/` | Offline use and home-screen install |
| `reports/`, `research_notes/` | Research on how seerah is taught to children aged 4–8 |

**Storyteller voice:** English is `en-GB-SoniaNeural`, Urdu is `ur-PK-UzmaNeural`, chosen by the owner from samples. Made through the free `edge-tts` tool. **Only the first story (`bird`) and the shared parts are narrated.** The owner stopped a full run and asked to hear one story first; he has not yet said what he thinks of it. Do not generate the rest until he asks.

To make audio: `pip install edge-tts imageio-ffmpeg`, then `python3 tools/make_voice.py --only <story id>`. In this cloud environment the script already passes the proxy setting it needs. After changing any site file, raise `VERSION` in `sw.js`.

## Not yet done or checked

- **The Urdu is an unchecked translation.** No fluent reader has reviewed it.
- **The stories are retold from memory of the book**, not checked line by line against a copy. The three hadith stories were checked against the hadith text.
- **Nothing has been tested on a real tablet or with the children.** All testing was in a desktop browser at tablet size.
- The owner has not given feedback on the storyteller voice, the pace, or any mispronounced names.
- The earlier idea of cloning the owner's own voice was dropped for now; it needs a paid voice service.

## Open questions for the owner

1. How old are the other children?
2. Is the Sonia / Uzma voice right, and is the pace right?
3. After the pilot episode: is the look good enough to make the rest?

## How the owner likes to work

- He usually follows from a tablet and wants plain language, not technical detail.
- He often turns on plan mode; write a plan and wait for approval before building.
- Show one example before producing many (one story, one voice sample, one shot).
- Commit and push to `claude/loving-darwin-sz5611`. No pull request unless he asks.
