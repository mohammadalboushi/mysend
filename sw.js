const CACHE_NAME = 'mysend-v3';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME)));
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
