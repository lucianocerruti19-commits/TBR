const CACHE_NAME = "tutto-v1";

const urlsToCache = [
  "index.html",
  "cliente.html",
  "admin.html",
  "mozo.html",
  "cocina.html",
  "dueno.html",
  "styles.css",
  "icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});