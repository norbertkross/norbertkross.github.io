'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "06c3ceff054866f623da6c322950feac",
"assets/assets/Avatar-1.png": "124f93ea74923db95c2ca9b2f7f7e5d4",
"assets/assets/Avatar-22.png": "f03681e860f7ba7777285a6911e78eee",
"assets/assets/Avatar-23.png": "7237e198a19def26f98dda6904e9e77e",
"assets/assets/Avatar-33.png": "9334e2ac627f3ea7800d6568ce657b4a",
"assets/assets/Avatar-34.png": "1493deb5832d6bf765b4a143a63086e7",
"assets/assets/Avatar-36.png": "67eb0948364663399cc11f147ea35bb2",
"assets/assets/daniel-korpai-mxPiMiz7KCo-unsplash.jpg": "b89331fcbffb9fb5baf31d55df139d98",
"assets/assets/GitHub_96px@3x.png": "be6407ee37c3b5f37afe54c105d67dc4",
"assets/assets/Icon%252520awesome-location-arrow@3x.png": "6fd0b495f7f7508c8bff02d130561f04",
"assets/assets/LinkedIn_104px@3x.png": "c96432f288ea55109c01be1539e0490f",
"assets/assets/Tech-stack/dart.png": "f35459cd3aebfc8ecaff7de5e8e8fdee",
"assets/assets/Tech-stack/firebase.png": "6b9c6faf9722110bf2668d7c7b22fefe",
"assets/assets/Tech-stack/html_css.png": "06dd57bc8bbc3284792796e60178c014",
"assets/assets/Tech-stack/javascript-scalable-vector-graphics-logo-encapsulated-postscript-javascript-icon-e4da2b81d311dd9166955fdfc3b4470b.png": "f4be07d6e963e38244832a5529b55b8f",
"assets/assets/Tech-stack/mysql.png": "df36e799f8c97b65a2769f92a25b6de1",
"assets/assets/Tech-stack/node.png": "86a32b4e0a64d7572c5d514210c10968",
"assets/assets/Tech-stack/php.png": "b58bf06570d03448ecd9fb078c7afdb9",
"assets/assets/Tech-stack/pluginIcon.png": "ece70ba279fa3bee27fa22be12f8b16e",
"assets/assets/Tech-stack/react.png": "cbbdc1b93f7cf79f5bb3681296b633c1",
"assets/assets/Tech-stack/the-c-programming-language-computer-icons-computer-programming-source-code-programming-379507b506bcaa225df9378940b22774.png": "255de04590f5750ab21aacf18b34ced2",
"assets/assets/Twitter_104px@3x.png": "6820e27e896e0f8f8f6e774129204182",
"assets/assets/uis/IMG_20201205_164357_294.jpg": "ebceb8f6172ae9c74dc750f41dcbc0c7",
"assets/assets/uis/onebite.png": "593fda2b67806898ab3c429b920f0136",
"assets/assets/uis/Screenshot%2520(118)@3x.png": "fc0c7d8373cee62bd8dfe1ded765cea5",
"assets/assets/uis/Screenshot%2520(119)@3x.png": "a91c2fbab436d0970c84c297eb4c8747",
"assets/assets/uis/Screenshot%2520(120)@3x.png": "1d7018e01152a19839a998851a2424a5",
"assets/assets/uis/Screenshot%2520(121)@3x.png": "c37bc3836d3b74556cf35004461975ab",
"assets/assets/uis/Screenshot%2520(26).jpg": "6fe6efdc432a6f7b7a51bd8fd7826fbc",
"assets/assets/uis/Screenshot%2520(27).png": "a40b27fe682074d8b857073a5d9806b9",
"assets/assets/uis/Screenshot%252520(118)@3x.png": "ab1a7c24ef54c8d1f7cfe693e4387ed6",
"assets/assets/uis/Screenshot%252520(119)@3x.png": "250eff989763ded6779a3a53df363788",
"assets/assets/uis/Screenshot%252520(120)@3x.png": "df5efc443f5d1cf36935724a9a816e2b",
"assets/assets/uis/Screenshot%252520(121)@3x.png": "b8b3291217080b03d4d3e96469e8924b",
"assets/assets/uis/Screenshot%252520(26).jpg": "5b44c9f47d794074c4c4d21a1fa409e2",
"assets/assets/uis/Screenshot%252520(27).png": "a40b27fe682074d8b857073a5d9806b9",
"assets/assets/uis/Screenshot_20210215-021158.png": "78fbbfe1289704e01b7e781a2ef27d43",
"assets/assets/uis/Screenshot_20210215-021821.png": "5941d13fb9e7e335b49ec6057f3377bd",
"assets/assets/uis/Screenshot_20210310-001533.png": "eb2b7eaea10a78e60d386ff3bd7a810b",
"assets/assets/uis/Screenshot_20210310-001648.png": "6d2f23b5a67829802579cb2b48072cae",
"assets/assets/uis/Screenshot_20210310-001811.png": "f160a1068884f5e62df1721e158d72b3",
"assets/assets/uis/Screenshot_20210310-001908.png": "7c476b76f0b21209d6534873d3bb9761",
"assets/assets/uis/Screenshot_20210322-162551.png": "797eb476e57ba8d52ff7216048c7ac1f",
"assets/assets/uis/Screenshot_20210328-074157.png": "b520f99bfb8ae6f2d32f1a50e9e5475b",
"assets/assets/uis/Screenshot_20210328-074209.png": "d35e21f338dd57a92b566b8e683cbb67",
"assets/assets/uis/Screenshot_20210328-074259.png": "f529d85bc59d8410417897013993d21c",
"assets/assets/uis/Screenshot_20210328-074325.png": "e15c2fba53a2826e261d7e340b877355",
"assets/assets/uis/Screenshot_20210328-074359222.png": "2651c59f02b5a447c10d590c5d66c443",
"assets/assets/uis/Screenshot_20210328-080008.png": "eae8e787a9cc6e5d6fa3aae1db6e8765",
"assets/assets/uis/Screenshot_20210328-080024.png": "d1292bc44aefbbf1fef78f1fe5ff1e6f",
"assets/assets/YouTube%2525202_96px@3x.png": "e4ebc08ca06db5b02be44314dea8eb38",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9472e6b469058e0899610b90cad2cd62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "8c22c9cefead67982dbe80a4a2b11d0c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "fc429117f09890e61524477745a20ef7",
"icons/Icon-512.png": "6f13b36c0b55f796dfe376c806b62b3a",
"index.html": "93f6c87d2cb21fa08497fac20cb939c8",
"/": "93f6c87d2cb21fa08497fac20cb939c8",
"main.dart.js": "29030fbed3821b8e419ec72c1872e82b",
"manifest.json": "35d5d895e32536f41a1c0a9dceb77b98",
"version.json": "c5a1d2a87e1ae43ff9f6d1f49d87810f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
