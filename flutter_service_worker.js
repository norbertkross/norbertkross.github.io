'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "03eaa9ab328f4a892ca8802f694d29b5",
"assets/assets/Avatar-1.png": "82160bd674e307325385a71b7f7b7c05",
"assets/assets/Avatar-22.png": "8a6a07e0591056f060ef638d21bbd482",
"assets/assets/Avatar-23.png": "17c65821cff50fec5d8d077d4a6635ad",
"assets/assets/Avatar-33.png": "e469ae1bfc7f82481413fdc1e53d6a7a",
"assets/assets/Avatar-34.png": "844721ea87d5bf5a13a0d156a4add4d7",
"assets/assets/Avatar-36.png": "6d6ec3627902a90e14459593e100f42c",
"assets/assets/daniel-korpai-mxPiMiz7KCo-unsplash.jpg": "93f3815eb9006b4071359bd5b860cd38",
"assets/assets/GitHub_96px@3x.png": "6b0a969a434d48d508ce93cc26621feb",
"assets/assets/Icon%2520awesome-location-arrow@3x.png": "20a49bb4e7a7e1067562f8ed15a03e20",
"assets/assets/LinkedIn_104px@3x.png": "9b990b729781157f42e50198141b89e7",
"assets/assets/Tech-stack/dart.png": "44e19243ce9f5baf2085221dd9805b38",
"assets/assets/Tech-stack/firebase.png": "ba72519ef91edd0b0465a8734b497573",
"assets/assets/Tech-stack/html_css.png": "c0ae9989b24c4f0a7593cfe290c8777b",
"assets/assets/Tech-stack/javascript-scalable-vector-graphics-logo-encapsulated-postscript-javascript-icon-e4da2b81d311dd9166955fdfc3b4470b.png": "f4be07d6e963e38244832a5529b55b8f",
"assets/assets/Tech-stack/mysql.png": "6719b915c01c1f1b3d72b6780ff564b4",
"assets/assets/Tech-stack/node.png": "86a32b4e0a64d7572c5d514210c10968",
"assets/assets/Tech-stack/php.png": "b58bf06570d03448ecd9fb078c7afdb9",
"assets/assets/Tech-stack/pluginIcon.png": "3827ad8a1fbab347ba24136d200215d4",
"assets/assets/Tech-stack/react.png": "3ac97d50f61ec96b13ca6a77d34683d4",
"assets/assets/Tech-stack/the-c-programming-language-computer-icons-computer-programming-source-code-programming-379507b506bcaa225df9378940b22774.png": "255de04590f5750ab21aacf18b34ced2",
"assets/assets/Twitter_104px@3x.png": "5c6a0ef3555e683c1610edcaaefee3cd",
"assets/assets/uis/IMG_20201205_164357_294.jpg": "3e3abfb7a273952fc78fed55e6a14331",
"assets/assets/uis/onebite.png": "593fda2b67806898ab3c429b920f0136",
"assets/assets/uis/Screenshot%2520(118)@3x.png": "7ed7e2f75a995e6f8c4caf8a35615d90",
"assets/assets/uis/Screenshot%2520(119)@3x.png": "698d340002317d874d50497c5e0f4810",
"assets/assets/uis/Screenshot%2520(120)@3x.png": "c94de92ae5862f0b470b1c9f013d4f02",
"assets/assets/uis/Screenshot%2520(121)@3x.png": "babf010d0a53a4e1451e227879a77d7f",
"assets/assets/uis/Screenshot%2520(26).jpg": "e7b3864d3a3b586734f8d1391462026e",
"assets/assets/uis/Screenshot%2520(27).png": "5229281128d1da1da27f9a47713c0ea8",
"assets/assets/uis/Screenshot_20210215-021158.png": "78fbbfe1289704e01b7e781a2ef27d43",
"assets/assets/uis/Screenshot_20210215-021821.png": "5941d13fb9e7e335b49ec6057f3377bd",
"assets/assets/uis/Screenshot_20210310-001533.png": "eb2b7eaea10a78e60d386ff3bd7a810b",
"assets/assets/uis/Screenshot_20210310-001648.png": "c9e8254552287a43901eeafd973f818c",
"assets/assets/uis/Screenshot_20210310-001811.png": "f3d4843e366c0aaf7277e09aa442e582",
"assets/assets/uis/Screenshot_20210310-001908.png": "7c476b76f0b21209d6534873d3bb9761",
"assets/assets/uis/Screenshot_20210322-162551.png": "797eb476e57ba8d52ff7216048c7ac1f",
"assets/assets/uis/Screenshot_20210328-074157.png": "b520f99bfb8ae6f2d32f1a50e9e5475b",
"assets/assets/uis/Screenshot_20210328-074209.png": "d35e21f338dd57a92b566b8e683cbb67",
"assets/assets/uis/Screenshot_20210328-074259.png": "f529d85bc59d8410417897013993d21c",
"assets/assets/uis/Screenshot_20210328-074325.png": "40b079c06c99f581268cd8ae3403f4bb",
"assets/assets/uis/Screenshot_20210328-074359222.png": "f6e0492d7e15db32af2f7cf1ea86d59e",
"assets/assets/uis/Screenshot_20210328-080008.png": "275fec5532a15f596d3e9a9dfa62bece",
"assets/assets/uis/Screenshot_20210328-080024.png": "d53f4922cf2a6e5b3947a0a1c30f5b76",
"assets/assets/YouTube%25202_96px@3x.png": "fb89551634efbd01e2a8b2df643c066c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4b6dbd07be8c5cc09537813b595ed416",
"/": "4b6dbd07be8c5cc09537813b595ed416",
"main.dart.js": "00873a8c9a79d5c30dfb169bede637c6",
"manifest.json": "62de9cc5c327b044021aac4f66c64e12",
"version.json": "ad71d2eb44c54a7963dce4a31dd6aa90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
