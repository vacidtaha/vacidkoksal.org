const CACHE_NAME = 'video-cache-v2';
const VIDEO_CACHE_NAME = 'video-files-v2';

// Cache edilecek dosyalar
const STATIC_CACHE_FILES = [
  '/',
  '/manifest.json'
];

// Video URL'lerini tanımlama
const VIDEO_URLS = [
  'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
  'https://videos.pexels.com/video-files/8134781/8134781-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/6893661/6893661-hd_1920_1080_30fps.mp4',
  'https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Static cache
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_CACHE_FILES);
      }),
      // Video cache - sadece ana sayfa video'sunu preload et
      caches.open(VIDEO_CACHE_NAME).then((cache) => {
        console.log('Service Worker: Preloading main video');
        // Sadece ana video'yu preload et, diğerleri on-demand
        return cache.add(VIDEO_URLS[0]);
      })
    ]).then(() => {
      console.log('Service Worker: Installation complete');
      return self.skipWaiting();
    })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== VIDEO_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Video istekleri için özel handling
  if (isVideoRequest(event.request)) {
    event.respondWith(handleVideoRequest(event.request));
  }
  // Diğer istekler için standart cache stratejisi
  else {
    event.respondWith(handleStandardRequest(event.request));
  }
});

// Video request kontrolü
function isVideoRequest(request) {
  const url = request.url;
  
  // Video URL'lerini kontrol et
  if (VIDEO_URLS.some(videoUrl => url.includes(videoUrl.split('?')[0]))) {
    return true;
  }
  
  // Video dosya uzantılarını kontrol et
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  return videoExtensions.some(ext => url.includes(ext));
}

// Video request handling - Cache First strategy
async function handleVideoRequest(request) {
  try {
    const cache = await caches.open(VIDEO_CACHE_NAME);
    
    // Önce cache'de ara
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      console.log('Service Worker: Video served from cache', request.url);
      return cachedResponse;
    }
    
    console.log('Service Worker: Fetching and caching video', request.url);
    
    // Cache'de yoksa network'ten al
    const networkResponse = await fetch(request);
    
    // Başarılı response'u cache'le
    if (networkResponse.status === 200) {
      const responseClone = networkResponse.clone();
      cache.put(request, responseClone);
      console.log('Service Worker: Video cached', request.url);
    }
    
    return networkResponse;
    
  } catch (error) {
    console.error('Service Worker: Video fetch error', error);
    
    // Fallback olarak cache'den herhangi bir video dön
    const cache = await caches.open(VIDEO_CACHE_NAME);
    const cachedKeys = await cache.keys();
    if (cachedKeys.length > 0) {
      return cache.match(cachedKeys[0]);
    }
    
    throw error;
  }
}

// Standard request handling - Network First for dynamic content
async function handleStandardRequest(request) {
  try {
    // Network first for HTML pages
    if (request.headers.get('accept').includes('text/html')) {
      try {
        const networkResponse = await fetch(request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, networkResponse.clone());
        return networkResponse;
      } catch (error) {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        return cachedResponse || new Response('Offline');
      }
    }
    
    // Cache first for other resources
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    cache.put(request, networkResponse.clone());
    return networkResponse;
    
  } catch (error) {
    console.error('Service Worker: Fetch error', error);
    throw error;
  }
}

// Message event - Manual cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_VIDEO') {
    const videoUrl = event.data.url;
    
    caches.open(VIDEO_CACHE_NAME).then((cache) => {
      cache.add(videoUrl).then(() => {
        console.log('Service Worker: Video manually cached', videoUrl);
        event.ports[0].postMessage({ success: true });
      }).catch((error) => {
        console.error('Service Worker: Manual video cache error', error);
        event.ports[0].postMessage({ success: false, error: error.message });
      });
    });
  }
  
  if (event.data && event.data.type === 'CLEAR_VIDEO_CACHE') {
    caches.delete(VIDEO_CACHE_NAME).then(() => {
      console.log('Service Worker: Video cache cleared');
      event.ports[0].postMessage({ success: true });
    });
  }
}); 