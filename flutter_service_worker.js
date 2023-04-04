'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ecd46108680c8b0d5853546d8c6f08a2",
"assets/assets/images/add-to-cart.png": "0b98a4198df3148e10fb0978685c2911",
"assets/assets/images/airpods/airpods3.jpg": "d85ba6c5e4cdf8f3c7097610687cf453",
"assets/assets/images/airpods/airpods_2_nesil.jpg": "000fa9e8a4f842dba24d7284adb3da8b",
"assets/assets/images/airpods/airpods_max.jpg": "09cc24d43887246b63a55c0c64cd4bd5",
"assets/assets/images/airTag.jpg": "aef1223f6868341262db123d4a57a744",
"assets/assets/images/airtag_loop.jpg": "85b7b4e02c21cd7f4a26387abc957ecb",
"assets/assets/images/apps.png": "149087e602ce2181e43bb053afc18eb4",
"assets/assets/images/apps2.png": "a15ed2b27c79f405fda38b38f4116f68",
"assets/assets/images/banner.png": "5a618de5a4869d9c4fe5a9c0a074fa8b",
"assets/assets/images/banner_2.jpg": "b40f466fdf63c3bb0edba74a0a6e8a0a",
"assets/assets/images/ipad/air.jpg": "a07488d1343cdd00d0a9e1c17cb3eff5",
"assets/assets/images/ipad/ipad_air.jpg": "c5a3200e51d68b532ec85a6310626bd2",
"assets/assets/images/ipad/ipad_pro.jpg": "a9a23d55c0dfb8bfc1a145fff0ab2a53",
"assets/assets/images/ipad/mini.jpg": "2df5434b6667cd5821dfcc81dd4bb46c",
"assets/assets/images/iphone/12.jpg": "f3db5fdfacea7f1dbb4a7f7a7ee3a743",
"assets/assets/images/iphone/13.jpg": "edb7156bb17663f5ebbc3e556a53d26f",
"assets/assets/images/iphone/13_pro.jpg": "612d6e7bcb4d39cedc62a27556d45ec6",
"assets/assets/images/iphone/ipohe_12_pro_max.jpg": "acb1e739e43c2aaa5fd1432ef824e602",
"assets/assets/images/iphone/se.jpg": "9a361bcd3df48a9c641c5d167d91f83f",
"assets/assets/images/mac/24_inc_imac.jpg": "4e11ccd9f5e27ee375d19b66f8ee48c8",
"assets/assets/images/mac/air_m1.jpg": "9f1bf29ed46c2194a5f270f6266447b1",
"assets/assets/images/mac/air_m2.jpg": "a7954de18a4212db88546e4a9736783d",
"assets/assets/images/mac/iMac.jpg": "6d44a08e9a77c9e4a03aef74ce9c9d8d",
"assets/assets/images/mac/macbook_pro.jpg": "442fad4c6d74db67ebb238549cf88346",
"assets/assets/images/mac/mac_mini.jpg": "16483fa5e5779b022020ee8a4f92dd24",
"assets/assets/images/mac/mac_pro.jpg": "c270e8c5b992f5d0a153f39c18738de3",
"assets/assets/images/mac/pro.jpg": "d1e48cf5f523dc0d74e16841d0f2ea0c",
"assets/assets/images/mac/pro2.jpg": "39d1ba5782febf638acac0606d0be967",
"assets/assets/images/qr.jpg": "8f5df14cfb07f45a6273bdecf0c63586",
"assets/assets/images/shopping-cart.png": "0910d7dfd11abb4a00cacb1cdc0d0f49",
"assets/assets/images/speaker.png": "3f88af96ee171565cf426e758b411425",
"assets/assets/images/watch/apple_watch.jpg": "05f3fa32bee954893e036c5442984cf6",
"assets/assets/images/watch/apple_watch_nike.png": "1e754e1085e0e4e6a9414ad24b6852bd",
"assets/assets/images/watch/w3.jpg": "21871f0f379b511991b3814c98c05d93",
"assets/assets/images/watch/w7.jpg": "2d993d5d4083a78684e85d116639ac5d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0947300b14bac7d8528fbe886ecbaaf7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eef751e56829d8ce876586fdfaff3cf9",
"/": "eef751e56829d8ce876586fdfaff3cf9",
"main.dart.js": "9053c5fa354cc69199254bfe26abfe3a",
"manifest.json": "adf6ed45579798134390fcbfa6860e54",
"version.json": "d78f5551c6ab7d116c8aad74114b9ba9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
