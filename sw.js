// Generated from the complete production build. Journal records are never cached here.
const VERSION = "9ec5f1e08af25ea4";
const BASE = new URL('./', self.location.href);
const PREFIX = 'forma-shell:' + BASE.pathname + ':';
const CACHE = PREFIX + VERSION;
const FILES = ["assets/index-BqYbnk4y.js","assets/index-Cyc73id3.css","assets/manrope-latin-400-normal-8tf8FM3T.woff","assets/manrope-latin-400-normal-PaqtzbVb.woff2","assets/manrope-latin-500-normal-BYYD-dBL.woff2","assets/manrope-latin-500-normal-DMZssgOp.woff","assets/manrope-latin-600-normal-4f0koTD-.woff2","assets/manrope-latin-600-normal-BqgrALkZ.woff","assets/manrope-latin-700-normal-BZp_XxE4.woff2","assets/manrope-latin-700-normal-DGRFkw-m.woff","assets/manrope-latin-800-normal-BfWYOv1c.woff2","assets/manrope-latin-800-normal-uHUdIJgA.woff","assets/outfit-latin-400-normal-BGsTXAXT.woff2","assets/outfit-latin-400-normal-DMwTpYkH.woff","assets/outfit-latin-500-normal-ClnHRwRh.woff","assets/outfit-latin-500-normal-DKnIMDSk.woff2","assets/outfit-latin-600-normal-B7SfZ07L.woff2","assets/outfit-latin-600-normal-BEfTtDA7.woff","favicon.svg","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","index.html","manifest.webmanifest","starter-plan.md"];
const URLS = FILES.map(path => new URL(path, BASE).href);
const KNOWN = new Set(URLS);
const HOME = new URL('index.html', BASE).href;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(URLS.map(url => new Request(url, { cache: 'reload' })));
  })());
  // Do not skipWaiting: replacing an app during an unfinished form risks losing it.
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== BASE.origin || !url.pathname.startsWith(BASE.pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) return response;
      } catch {}
      return (await (await caches.open(CACHE)).match(HOME)) || Response.error();
    })());
    return;
  }
  if (KNOWN.has(url.href)) {
    event.respondWith((async () => (await (await caches.open(CACHE)).match(request)) || fetch(request))());
  }
});
