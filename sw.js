/* Lets the site be installed as an app and keeps visited pages available offline.
   Network first: visitors always get the newest version when they are online. */
const CACHE = "mt-classes-v3";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  // Videos stream in pieces (range requests) and are too big to keep offline: let the browser fetch them directly.
  if (r.headers.has("range") || /\.mp4$/i.test(new URL(r.url).pathname)) return;
  e.respondWith(fetch(r).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); return res; }).catch(() => caches.match(r)));
});
