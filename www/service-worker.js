importScripts('serviceworker-cache-polyfill.js');
var CACHE_NAME = 'gz-it-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '/serviceworker-cache-polyfill.js',
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
    '/assets/images/icon/logo-512.png',
    '/styles.9102c06c7406f454b395.bundle.css',
    '/inline.80caacb3792485df377e.bundle.js',
    '/polyfills.07685bca73161be59257.bundle.js',
    '/vendor.4373e21ea926766fe69b.bundle.js',
    '/main.9b5cbbaa9f6719390c83.bundle.js'
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
