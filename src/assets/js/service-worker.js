self.addEventListener('install', event => {
  let timeStamp = Date.now();
  event.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        `/`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});