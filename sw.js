// Hält die App-Oberfläche offline verfügbar. Karten und Höhendaten brauchen weiterhin Netz.
// Gespeicherte Waldwege (Cache "lwf-trk-…") bleiben bei Updates erhalten.
// Bei jeder neuen Version die Nummer in CACHE erhöhen, damit alle Geräte das Update laden.
const CACHE = "lwf-v14";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && !k.startsWith("lwf-trk")).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  const isShell = u.origin === location.origin || u.hostname === "cdnjs.cloudflare.com";
  if (!isShell) return; // Kacheln, Höhen, Suche immer live
  e.respondWith(
    fetch(e.request).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
