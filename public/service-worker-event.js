// Install event
self.addEventListener('install', (e) => {
  console.log('[Service Worker] installed');
});

// Activate event
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] activated', e);
});

// Fetch event
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] fetched resource ' + e.request.url);
});
