const CACHE_NAME = 'TMKG-v1';
const ASSETS = [
    '/DSK/',
    '/DSK/index.html',
    '/DSK/styles.css',
    '/DSK/main.js',
    '/DSK/manifest.json',
    '/DSK/offline.html'
];

// Instalación: Guardar archivos estáticos
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// Activación: limpiar caches antiguas si las hubiera
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Estrategia: Cache First (Servir desde caché si existe)

// Estrategia: Cache then Network (stale-while-revalidate)
self.addEventListener('fetch', (event) => {
    // Solo interesan las peticiones GET (evita reintentos de POST/PUT/DELETE)
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached file, or try the network
      return response || fetch(event.request);
    })
  );
});

