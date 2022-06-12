'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "492628ec64b4e8fc84795bc0527a370a",
"assets/filmler/3idiot.jpg": "df0801b81f4bec5f2a86d92031ca3e1a",
"assets/filmler/anadoluda.png": "8ac9a2c7e034c05b84e61ceb351a0a9f",
"assets/filmler/bb.jpg": "1258a60ebb3eaeebf891d88a59079bc7",
"assets/filmler/django.png": "c28d12e6e4f7a3af167442650bfc65ac",
"assets/filmler/dk.jpg": "224a2bee45b7fcffe500895321b28311",
"assets/filmler/dune.jpg": "62785fdb03bb86829a432040dbc7633a",
"assets/filmler/exorcist.jpg": "1fea83b982b4ee421216791b202ff4e3",
"assets/filmler/gora.jpg": "8a147e860bc0efb73224f6d60751b44b",
"assets/filmler/hangover.jpg": "b23547417573a8340ff2de7fd30267fc",
"assets/filmler/inception.png": "afff7b224ede1a0f404b046821e7846d",
"assets/filmler/infinitywar.jpg": "404ed810226a5a29749e2bc45b2e066f",
"assets/filmler/interstellar.png": "9f00eb71f47a5c5d9b82a5ead14e2630",
"assets/filmler/lotr.jpg": "ff495fb6431ca5db9176a67c9374da15",
"assets/filmler/midsommar.jpg": "c63dff8ac82a49b4a82a9b010ebe81fd",
"assets/filmler/mmx.jpg": "46c01680da4c790687e97feae89ee81e",
"assets/filmler/saw.jpg": "a57d657f8158c4344991a11e67458877",
"assets/filmler/seinfeld.jpg": "861c05cc3757bdfab7161a1c4c83e0e5",
"assets/filmler/shining.jpg": "80d1ec82656a5d29ae10ef54b9f44468",
"assets/filmler/sis.jpg": "679ff50b52df8ae7b8d664275c8eede7",
"assets/filmler/td.jpg": "51b587a8b782acdb4b70c7d6dcacdec7",
"assets/filmler/tenet.jpg": "b7b9b121c4bf2418f7a40feabd55ed7e",
"assets/filmler/thehatefuleight.png": "ce25034edec407afa7c35c2a32e517d2",
"assets/filmler/thepianist.png": "9ef050702a1aab1a14448d87bcb851c6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "e4e57373909c51dd5ab32e92703b4651",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/resimler/aksiyon.png": "57eb638336735bacbf0a04a4acad390a",
"assets/resimler/bilimKurgu.jpg": "2369dc4c1b657e9158cfefa27031152b",
"assets/resimler/dizi.jpg": "5a65976167c5e7d7dc9a133dd0d17a7b",
"assets/resimler/fv.png": "1b1bb379dca8e9f55f33c8b334a32609",
"assets/resimler/gerilim.jpg": "06fe417a77d135a6310067392d551bf8",
"assets/resimler/komedi.jpg": "72d3c33ef6c527e46b8fb8d4895ed037",
"assets/resimler/korku.jpg": "2bdf38f9f1f23ade7848f17df6f25fa3",
"assets/resimler/logo2.png": "6cd1c669b099b0d56f320768304311d1",
"assets/veritabani/filmler.sqlite": "3a0e049d9b822c8cba2d9bc159e716e3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5da4bd85ba559ba4aa9741f5153fd3a",
"/": "b5da4bd85ba559ba4aa9741f5153fd3a",
"main.dart.js": "15891722bd15c55fff3052087d6f2d24",
"manifest.json": "be59bebbd77fdc927ef60714ddb9867f",
"version.json": "7bcbb35e4ef1441f9d0fbe43b4a05e14"
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
