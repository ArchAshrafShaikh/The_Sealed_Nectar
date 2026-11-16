/* Offline support. The app's own files are saved on first visit; fonts are saved the first time they load.
   Change VERSION whenever any file changes, so tablets pick up the new copy. */
const VERSION = "sn-v6";
const SHELL = ["./", "index.html", "styles.css", "app.js", "audio.js", "stories/stories.js", "scenes/scenes.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-180.png", "voice/manifest.json"];

self.addEventListener("install", (e) => e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const font = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== location.origin && !font) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: url.origin === location.origin }).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      });
      // Only a page load falls back to the saved page; a missing file stays missing.
      return hit || (req.mode === "navigate" ? net.catch(() => caches.match("index.html")) : net);
    })
  );
});
