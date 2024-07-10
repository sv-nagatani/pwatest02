var CACHE_NAME = 'pwa-test';
var urlsToCache = ['../../index.html', '../js/main.js', '../css/main.css'];

// インストール処理
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response ? response : fetch(event.request);
    })
  );
});

// 定期的な同期処理の待ち受け
self.addEventListener('periodicsync', event => {
	if (event.tag === 'get-location') {
		//event.waitUntil(dispLocation());
		event.waitUntil(test());
	}
});

function test() {
	alert("test!");
}
