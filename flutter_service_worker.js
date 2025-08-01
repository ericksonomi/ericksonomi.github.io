'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7b3fe73fc5811d5f38fddb904680852b",
"assets/AssetManifest.bin.json": "eeced1015008bba18715b587a9fd113a",
"assets/AssetManifest.json": "c68a99a47f90f5131b6ee31b82a4df65",
"assets/assets/icon/calculadora.png": "986b25435af6639f099d9db4ee2f6b0a",
"assets/assets/icon/cambiar_cantidad.png": "cf578b95a5655a4f131c3bb530200496",
"assets/assets/icon/cerrar.png": "58a96c07025b5a8b9f62cde4d6524113",
"assets/assets/icon/clientes.png": "cd5c60f814b7d322d63267658c3f193b",
"assets/assets/icon/computer.png": "a223f2e054a9ee8ed95396465777592e",
"assets/assets/icon/cotizacion.png": "dd368efbd6309e7950223deba8cfd4ad",
"assets/assets/icon/crear.png": "63a5492eb0088ef5f22cb16b69dfaca8",
"assets/assets/icon/eliminar.png": "5982cb101d2841ac29b62363b64142df",
"assets/assets/icon/justificante_caja.png": "c67bbd6b736973c85edb0f23599b74e7",
"assets/assets/icon/keyboard.png": "ee331de1036054150f2fd87aeab90d92",
"assets/assets/icon/lista_pedidos.png": "27ac26cd3f07bc7db95991453cac01b4",
"assets/assets/icon/printer.png": "54fb664b3c38726e893f6ef722190588",
"assets/assets/icon/Save-temp.png": "2fd8f74d24f912850d945c4c575a87b7",
"assets/assets/icon/whatsapp.png": "bdf4406a5644fb40f99fc6c35f4cd477",
"assets/assets/images/bg_drawer_licor.jpeg": "2e87e9203e5f1cd823abda4b59867eda",
"assets/assets/images/bg_drawer_optica.jpeg": "df49cd1584f5f291619aae13646f0ee7",
"assets/assets/images/bg_home_ventas.jpg": "7b0740f3d87b6ebd6910fd109738dbe8",
"assets/assets/images/bg_login_licor.png": "1c8433b90a9b91b122ec3669cb850b0f",
"assets/assets/images/bg_login_market.png": "e3a02e096ba9e97648e1a5512e2075e7",
"assets/assets/images/bg_login_optica.png": "63884ae1db569d8113eb43d53da18af8",
"assets/assets/images/cinta_titulo.png": "1f11698338b22e4778fdc2e542984cef",
"assets/assets/images/logo.png": "ead90972e8b7ba6027a14dce7fe84135",
"assets/assets/images/logo_licor.png": "956f9c7e2dcb8859734b19c506bfad2c",
"assets/assets/images/logo_optotipos.png": "3dd49213bdae5d4fb41f2ee2e7abe020",
"assets/assets/images/not-available-es.png": "354afd7507991f443dadc2fe342f16f9",
"assets/assets/images/resultados-not-found.png": "479cd9a83a14689c7b9da2597f88410c",
"assets/assets/images/teclado.jpg": "3591a164ba2e97b5d2a116d3396765d7",
"assets/FontManifest.json": "6bf336df0398e988fcea0edf135a0499",
"assets/fonts/MaterialIcons-Regular.otf": "81b2321c77e4d37fee72d0d94ba93065",
"assets/NOTICES": "aab033d408a8a019632356b9fa0274d0",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "c938c8d781be14b8bfea4becb21671f0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a7781e976e7ead456cf66f44560c83c0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "794edc1242cd46486dbe9e385e2c6dab",
"/": "794edc1242cd46486dbe9e385e2c6dab",
"main.dart.js": "cc59f093c8132eea342e70a0eb30dbda",
"manifest.json": "b27acd203810706660ae299119b3543b",
"version.json": "73dde9b3a7e119732bd0731d63c02816"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
