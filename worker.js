const CACHE_NAME = 'to-moko-v1';
const ASSETS_TO_CACHE = [
  '/DSK/',
  '/DSK/index.html',
  '/DSK/styles.css',
  '/DSK/main.js',
  '/DSK/worker.js',
  '/DSK/manifest.json',
  '/DSK/icons/icon-192.png',
  '/DSK/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  console.log('SW: Install Event started');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Cache opened, adding assets...');
      // We use map to catch WHICH specific file fails
      return Promise.all(
        ASSETS_TO_CACHE.map(url => {
          return cache.add(url).catch(err => console.error(`SW: Failed to cache ${url}`, err));
        })
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW: Activate Event');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
