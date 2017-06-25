importScripts('serviceworker-cache-polyfill.js');
var CACHE_NAME = 'gz-it-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/assets/manifest.json',
    '/assets/js/service-worker.js',
    '/assets/images/holiday.png',
    '/assets/images/gz-it-logo.png',
    '/assets/images/blood-200.png',
    '/assets/images/ghost-200.png',
    '/assets/images/icon/logo-120.png',
    '/assets/images/icon/logo-128.png',
    '/assets/images/icon/logo-144.png',
    '/assets/images/icon/logo-192.png',
    '/assets/images/icon/logo-256.png',
    '/assets/images/icon/logo-384.png',
    '/assets/images/icon/logo-512.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
