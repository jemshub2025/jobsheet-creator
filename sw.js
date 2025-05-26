self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('job-sheet-cache').then(cache => {
      return cache.addAll(['.', 'index.html', 'manifest.json', 'NEW JOB SHEET - 2024.pdf']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});