// service-worker.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
toolbox.precache(['/','/index.html']);
toolbox.router.get('/', toolbox.cacheFirst);