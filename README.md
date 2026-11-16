# Sealed Nectar Stories

Stories from the life of the Prophet Muhammad ﷺ for a young child, retold from *The Sealed Nectar* (Ar-Raheeq Al-Makhtum) by Safiur-Rahman al-Mubarakpuri.

It is built for a child of 4 to 8 to open and use alone on a tablet. Nothing on his side needs reading: he taps a picture, hears the story in his parent's recorded voice, and taps things in the scene to make them move.

- 12 stories, from the Year of the Elephant to the first believers
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

**Record your voice.** Pick a story and a language, and record each picture's text once. There is also one opening (Bismillah) and one closing (salawat) per language, used for every story. He hears your recording every time. Where a part has no recording, the tablet's built-in voice is used if it has one for that language; if it has none, he sees a crossed-out microphone and the story waits for him to tap the arrow.

**Read aloud.** The full text for the nights you tell it yourself, with two questions to ask him, one small habit to practise that week, and where to find the event in the book.

**Settings.**

| Setting | What it does |
|---|---|
| Language he hears | English or Urdu |
| Stories open to him | Starts at 1. Open one more each week; the rest stay grey on his path |
| Day or night look | Night is dimmer, for bedtime |
| Sounds | Tap sounds and background wind or crickets |
| Read-along words | For about age 6 and up: shows the words and lights each one as it is said |
| Tell it back | For about age 6 and up: he records himself telling the story and plays it to you |
| Back up your recordings | Saves all recordings to one file, and restores them |
| His progress | Shows how many stories he has finished; can be reset |

Recordings live only in that browser on that tablet. Clearing the browser's data deletes them, so save a backup file after recording.

## Before you record

- **Read the Urdu through once.** It is a translation of the English retelling and has not been checked by a fluent reader. Change any wording you would say differently (in `stories/stories.js`).
- **Check the stories against the book.** They are short retellings for a small child, written in new words; nothing is copied from the book. Each story lists the part of the book it comes from.
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

- Text: add an entry to `stories/stories.js` with a title, one text per picture in English and Urdu, two questions and a habit.
- Pictures: add an entry with the same `id` to `SN.art` in `scenes/scenes.js`, one line per picture, built from the backdrops and props defined in that file.
- After any change, raise `VERSION` in `sw.js` so tablets fetch the new copy.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page |
| `styles.css` | Layout, colours for day, dusk, dawn and night, and every tap animation |
| `app.js` | Story path, story player and the grown-ups' area |
| `audio.js` | Recording, playback, device-voice fallback, sounds, backup |
| `stories/stories.js` | All story text |
| `scenes/scenes.js` | All drawings |
| `sw.js`, `manifest.webmanifest`, `icons/` | Home-screen install and offline use |
