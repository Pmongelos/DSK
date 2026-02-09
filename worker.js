const CACHE_NAME = 'TMKG-cache-v1';
const ASSETS_TO_CACHE = [
  '/TMKG/',
  '/TMKG/index.html',
  '/TMKG/styles.css',
  '/TMKG/main.js',
  '/TMKG/worker.js',
  '/TMKG/manifest.json',
  '/TMKG/kiwi192X192.png',
  '/TMKG/kiwi512X512.png'
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
