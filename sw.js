/* Lets the site be installed as an app and keeps visited pages available offline.
   Network first: visitors always get the newest version when they are online. */
const CACHE = "mt-classes-v4";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); return res; }).catch(() => caches.match(r)));
});
