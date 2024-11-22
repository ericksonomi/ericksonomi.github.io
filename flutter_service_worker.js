'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "245555fbc4a127b77a49f79b4ebffb26",
"version.json": "fafd88ede4c2c8fadd626cd73df59863",
"index.html": "7d66546e895bc70749a7de63ec48c7e2",
"/": "7d66546e895bc70749a7de63ec48c7e2",
"main.dart.js": "53e1b4e62623764ff7e12c63cdf3c7ec",
"web_content/index.html": "b66dc498a9dbd393d8919cb34612f040",
"web_content/css/bootstrap.min.css": "adec9c812c63c683310aa97c6d435599",
"web_content/css/style.css": "55c08af5e6bc644d272419e244c4151f",
"web_content/js/main.js": "dc53cbab8b30f49504c8463127246bb4",
"web_content/scss/bootstrap/scss/_functions.scss": "433150623caf1fd36586f1d58d443eb9",
"web_content/scss/bootstrap/scss/_containers.scss": "19427273129635dcacc9358c5ab4e9c3",
"web_content/scss/bootstrap/scss/_toasts.scss": "d9aa9ff707bfb89d0dd24dfb723c0733",
"web_content/scss/bootstrap/scss/_navbar.scss": "09fa56b99ca22d33b36a85a752a3fb03",
"web_content/scss/bootstrap/scss/_variables.scss": "656a9b80ddd0612dfe8360a08ae689a8",
"web_content/scss/bootstrap/scss/_progress.scss": "6705d8e1cf2cd6fdb2a30d4428e3e42e",
"web_content/scss/bootstrap/scss/_offcanvas.scss": "4b3b76ceb7d775943b0192f20cbf8e6d",
"web_content/scss/bootstrap/scss/_popover.scss": "4340eb31bb1bdd8bd42b6b04377a79db",
"web_content/scss/bootstrap/scss/forms/_floating-labels.scss": "07a286a60b7247b55e2d9f6ffcb712f2",
"web_content/scss/bootstrap/scss/forms/_input-group.scss": "89c79d20b83bcd45609ebfb44411881a",
"web_content/scss/bootstrap/scss/forms/_form-check.scss": "66f17e219f6b2aecc57be72f13b3274a",
"web_content/scss/bootstrap/scss/forms/_form-text.scss": "3c18d8708d344a21c0f2e21a7c8ad2e4",
"web_content/scss/bootstrap/scss/forms/_form-range.scss": "799652fc4630a9d256156a0cb05d2abe",
"web_content/scss/bootstrap/scss/forms/_form-select.scss": "e41190ce775766d43ea15d2f56beb002",
"web_content/scss/bootstrap/scss/forms/_form-control.scss": "fb3fd971fba161cc22bcfc599105a0bf",
"web_content/scss/bootstrap/scss/forms/_validation.scss": "2a11a9255e117bc36e44b08820747975",
"web_content/scss/bootstrap/scss/forms/_labels.scss": "5cebf4f019f42de9f15a2316f7c45510",
"web_content/scss/bootstrap/scss/_breadcrumb.scss": "5be2578d6dc6dae15fdfa18b2ad54fc9",
"web_content/scss/bootstrap/scss/_carousel.scss": "027688b13168026903b29d4162e67c2c",
"web_content/scss/bootstrap/scss/bootstrap.scss": "977e561ab9467b90c23db9467d642ae3",
"web_content/scss/bootstrap/scss/_badge.scss": "010407932e86f02aefed2e15717a8d2b",
"web_content/scss/bootstrap/scss/mixins/_reset-text.scss": "9ec95074e21fada6e1300b443ecc3e2a",
"web_content/scss/bootstrap/scss/mixins/_table-variants.scss": "cee8035523af1959e3114f527f3ea8f9",
"web_content/scss/bootstrap/scss/mixins/_image.scss": "4be5005673c8272da6d24b6742003fe7",
"web_content/scss/bootstrap/scss/mixins/_deprecate.scss": "19856441739526899f902c884f3d2b58",
"web_content/scss/bootstrap/scss/mixins/_lists.scss": "c7e34a356a8616f3ad20b7bf88c93854",
"web_content/scss/bootstrap/scss/mixins/_gradients.scss": "98e3a535b741adfbd6b445839e279b82",
"web_content/scss/bootstrap/scss/mixins/_text-truncate.scss": "c51a1018bf42368c45eb12d6ac16f938",
"web_content/scss/bootstrap/scss/mixins/_visually-hidden.scss": "1fedb1531be9e8751151c6c43e052bfc",
"web_content/scss/bootstrap/scss/mixins/_container.scss": "81153f825e198ebcda691289675ea71e",
"web_content/scss/bootstrap/scss/mixins/_utilities.scss": "0ac2c2e0465c145dc0b0cd10a3470748",
"web_content/scss/bootstrap/scss/mixins/_breakpoints.scss": "9629bb2c04b47b44d22da752a2932a12",
"web_content/scss/bootstrap/scss/mixins/_box-shadow.scss": "f5a7d5f8d547ab845044b50ab0aa4ac2",
"web_content/scss/bootstrap/scss/mixins/_forms.scss": "b8aba96578457a119146022e78511392",
"web_content/scss/bootstrap/scss/mixins/_buttons.scss": "5fde06b7c6c2f9938c9ec505513d69dd",
"web_content/scss/bootstrap/scss/mixins/_transition.scss": "80dea9aa5861a6de307bda4a84ca780f",
"web_content/scss/bootstrap/scss/mixins/_caret.scss": "723bafe1d9ff8070dcc691d050549242",
"web_content/scss/bootstrap/scss/mixins/_resize.scss": "af032cea5fd5e37d9a5a8b971e290ff4",
"web_content/scss/bootstrap/scss/mixins/_color-scheme.scss": "6f3cb289c06ab079b6cb6a1f2e74c819",
"web_content/scss/bootstrap/scss/mixins/_list-group.scss": "f9539c99a853ef3dc6d358a9919b1c4e",
"web_content/scss/bootstrap/scss/mixins/_pagination.scss": "59727102344546e4bd6e9b6cc05178e2",
"web_content/scss/bootstrap/scss/mixins/_clearfix.scss": "101843d44d8f308e5d30659c210a93a7",
"web_content/scss/bootstrap/scss/mixins/_grid.scss": "a9a585cab6994926122bd87b45afc05a",
"web_content/scss/bootstrap/scss/mixins/_alert.scss": "77d50cf55468365cd02289cfe90eeeff",
"web_content/scss/bootstrap/scss/mixins/_border-radius.scss": "9365ecee7a6a100704a752a9b34da011",
"web_content/scss/bootstrap/scss/_helpers.scss": "339a3ca239fdcdc0999416b4a4658822",
"web_content/scss/bootstrap/scss/_accordion.scss": "e884bc1b576e86a510b464d18557991f",
"web_content/scss/bootstrap/scss/_button-group.scss": "a41168202c441bd137f4eccfcadb2327",
"web_content/scss/bootstrap/scss/_reboot.scss": "85b14186fd4bceb2a72aa999c245d176",
"web_content/scss/bootstrap/scss/_utilities.scss": "93dca053c7548c2f0471b83a6cc1a106",
"web_content/scss/bootstrap/scss/_forms.scss": "af9736f55ccf4b526ff706146ce41445",
"web_content/scss/bootstrap/scss/_buttons.scss": "a2b5c1803c6b291c377c725122a2b35c",
"web_content/scss/bootstrap/scss/_tables.scss": "606efa77037e00599ed9027635098103",
"web_content/scss/bootstrap/scss/utilities/_api.scss": "2c049eea78577544284d790ee3e40fa5",
"web_content/scss/bootstrap/scss/_images.scss": "d50c4811e230bbe09536f6b5eca808a9",
"web_content/scss/bootstrap/scss/_close.scss": "f3eeef2d1971f30bc17b7c8b5ad69d17",
"web_content/scss/bootstrap/scss/_list-group.scss": "c5a22cf0d58a2944cde96dcec3be5702",
"web_content/scss/bootstrap/scss/bootstrap-grid.scss": "55342826fd59fb2bb096fa50a1fca204",
"web_content/scss/bootstrap/scss/_pagination.scss": "c1ca597952e35682b3da229b0962df20",
"web_content/scss/bootstrap/scss/_card.scss": "c5850313dc5eaee0f8c723540171dbba",
"web_content/scss/bootstrap/scss/_grid.scss": "3ea779fe9378292e6b07dd730ce276c0",
"web_content/scss/bootstrap/scss/_mixins.scss": "e52eedd6af1b3275973cedf7e129dbf4",
"web_content/scss/bootstrap/scss/_nav.scss": "2703dfdcd9b70d7d682e313561cfb59b",
"web_content/scss/bootstrap/scss/_alert.scss": "8998dc7d7b3ec1617402730f2f3ea3af",
"web_content/scss/bootstrap/scss/_transitions.scss": "f095172028dfb956f0153d26b5af2ec8",
"web_content/scss/bootstrap/scss/_tooltip.scss": "e1f6835730bdb688d647a6bd49bb0dee",
"web_content/scss/bootstrap/scss/_root.scss": "cde311f6b15dceacc4193386cf96e4c5",
"web_content/scss/bootstrap/scss/bootstrap-utilities.scss": "b89b1acc663f70a0bb45679fe313b144",
"web_content/scss/bootstrap/scss/_modal.scss": "8e9613643341c994141a0f971dca5cc8",
"web_content/scss/bootstrap/scss/_spinners.scss": "68d2dbd5672715c99a7c1a8e98cbcc97",
"web_content/scss/bootstrap/scss/helpers/_ratio.scss": "61857698ee98d3b99c13ed63b0e24447",
"web_content/scss/bootstrap/scss/helpers/_visually-hidden.scss": "9b5a75ecdb0080663a8e4d2b6dcf6593",
"web_content/scss/bootstrap/scss/helpers/_clearfix.scss": "01ed6cc705196c6f0fe33300de134ee7",
"web_content/scss/bootstrap/scss/helpers/_text-truncation.scss": "7b3965903a331a539f76f4ad8bf99b52",
"web_content/scss/bootstrap/scss/helpers/_position.scss": "7a8080dca11eaf6cccbca17803f3b129",
"web_content/scss/bootstrap/scss/helpers/_stretched-link.scss": "1cd3650187aa8f6179952287b96335d4",
"web_content/scss/bootstrap/scss/helpers/_colored-links.scss": "06e8cdfe3d9210d196c18cd5993d7362",
"web_content/scss/bootstrap/scss/_type.scss": "f71e850c035f717cc6ed2d3c29636643",
"web_content/scss/bootstrap/scss/_dropdown.scss": "6c07dbb32144cc41d9be99461a1718f3",
"web_content/scss/bootstrap/scss/vendor/_rfs.scss": "c4b54a909ead37f8fa014e582c6fbe25",
"web_content/scss/bootstrap/scss/bootstrap-reboot.scss": "392fa5d6316690f21a6bacd7798dda65",
"web_content/scss/bootstrap.scss": "5a4fe733d7371c57d3f57aaf06779800",
"web_content/img/Thumbs.db": "fafb2ee3cb0b83120826d0cd10b2505e",
"web_content/img/testimonial-1.jpg": "eea00234181fd0ef1c064b7684087b53",
"web_content/img/testimonial-3.jpg": "d96e2fb6a4f3cdd6dbd236fc1dc47e7e",
"web_content/img/testimonial-2.jpg": "39677d86d721144740f909d96fc415e3",
"web_content/img/contact-img.png": "ed75b8276778dabc4b2397f94cf3c462",
"web_content/img/blog-4.png": "ef74e8c147212315068410a6494a5485",
"web_content/img/blog-1.png": "175b4acacc5d997a823283ca0e9ed84b",
"web_content/img/blog-3.png": "c8dabd4cf4f7c934b9d7e50a638d55cd",
"web_content/img/blog-2.png": "c8d35e20233d8067fb4271312c14f5e8",
"web_content/img/carousel-2.png": "517ace32a6d37f4e3a98dbad0500527b",
"web_content/img/team-1.jpg": "484dac5ee8dac401ff77a6de9e5ab9f6",
"web_content/img/instagram-footer-1.jpg": "e9428e8f73fb28ab43a33db971ead6f1",
"web_content/img/bg-breadcrumb.jpg": "25b180e12e989172117df3d1f38e12b1",
"web_content/img/instagram-footer-3.jpg": "120e1c393501f220bfab343d2e87220c",
"web_content/img/team-3.jpg": "93d644b8091c90d8a9cd1d48810045c5",
"web_content/img/team-2.jpg": "31102f6e4309c2bd243eaaa8e17e3f0c",
"web_content/img/instagram-footer-2.jpg": "aa7d5741d45c3076eb8fa96669d07c34",
"web_content/img/instagram-footer-6.jpg": "aa40173bf4ef648009a85ff6b9ec6af9",
"web_content/img/instagram-footer-5.jpg": "788fd36f06abdbcebab121f46c12e264",
"web_content/img/team-4.jpg": "9023bc3efebe4c43f3b8944c6ba4e4f5",
"web_content/img/about-1.png": "01bca7b3b28c844a0cd3b90a37a247cb",
"web_content/img/instagram-footer-4.jpg": "2558db3151a20ae8726bf0602708d99a",
"web_content/lib/easing/easing.js": "ec0a5208d6fa3bb72fe78c1cf3008600",
"web_content/lib/easing/easing.min.js": "d64116a742887080b3a0abd09e0bdad7",
"web_content/lib/animate/animate.min.css": "49a9d2997750b3ff77389e0909374af3",
"web_content/lib/animate/animate.css": "1c7ad0a97d2dc2da70b8d855ae946cae",
"web_content/lib/waypoints/waypoints.min.js": "7d05f92297dede9ecfe3706efb95677a",
"web_content/lib/waypoints/links.php": "9ce55e11461aedb16133af6e27bd2b88",
"web_content/lib/wow/wow.js": "a42b4ffa587794f087d064affc5b577d",
"web_content/lib/wow/wow.min.js": "5ccc5286f6d87963ed8474ff9ed6f146",
"web_content/lib/lightbox/css/lightbox.min.css": "da9a11a7dd15df94a826c2f2a8f2a2ba",
"web_content/lib/lightbox/images/loading.gif": "2299ad0b3f63413f026dfec20c205b8f",
"web_content/lib/lightbox/images/next.png": "31f15875975aab69085470aabbfec802",
"web_content/lib/lightbox/images/prev.png": "84b76dee6b27b795e89e3649078a11c2",
"web_content/lib/lightbox/images/close.png": "d9d2d0b1308cb694aa8116915592e2a9",
"web_content/lib/lightbox/js/lightbox.min.js": "8b3f0cd675aa4d294ebae0315f99cff2",
"web_content/lib/owlcarousel/LICENSE": "35dd9820e3468f0e4d68f65b307aa23d",
"web_content/lib/owlcarousel/owl.carousel.js": "0aa8dbbc9beca33dd418f7b2a3c966b1",
"web_content/lib/owlcarousel/owl.carousel.min.js": "b7b9c97cd68ec336d01a79d5be48c58d",
"web_content/lib/owlcarousel/assets/ajax-loader.gif": "01000918725acebd286de3787fca4ee0",
"web_content/lib/owlcarousel/assets/owl.theme.green.css": "8d78112daf1543f9f929c60a5735ce2b",
"web_content/lib/owlcarousel/assets/owl.theme.green.min.css": "95a767285dbb8f91ec5d6482155bd0e3",
"web_content/lib/owlcarousel/assets/owl.video.play.png": "4a37f8008959c75f619bf0a3a4e2d7a2",
"web_content/lib/owlcarousel/assets/owl.theme.default.min.css": "275048a23c69c24c6bd3316d9a45882e",
"web_content/lib/owlcarousel/assets/owl.carousel.min.css": "de0dfbabe627afa1b718d848b6b58e97",
"web_content/lib/owlcarousel/assets/owl.theme.default.css": "26dd7ebd96f611bff70d97bd1eb24ca1",
"web_content/lib/owlcarousel/assets/owl.carousel.css": "83ef097be10f83e9f999a55c34a04beb",
"web_content/lib/counterup/counterup.min.js": "d0ce5cfe7008eab4a73260954f06df68",
"web_content/LICENSE.txt": "148600371a17315f2a38835a590be4a0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "652a15b6c45032fdf87268c76dd6c8b7",
"assets/AssetManifest.json": "85e4b90fbb8a380c02f80dd4b3971e34",
"assets/NOTICES": "249ea48b5d57d40f90e217beff979622",
"assets/FontManifest.json": "a582526ebf46f8d727a53b794efd2cbe",
"assets/AssetManifest.bin.json": "61a25b0877ec5930c41e3194431fbd2a",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2ab0762f96c0b8a40f5fe7e9602b15e3",
"assets/fonts/MaterialIcons-Regular.otf": "7097dd3f9b9dbb4b89c8ee5b1ae8a92d",
"assets/assets/images/vipnew.png": "15070a55c51bff0fb727683dd149ed59",
"assets/assets/images/profile_nopicture.png": "9f50b5a313af60b2f20c86afac116835",
"assets/assets/images/curso.png": "365e9139bf617fc607a179504fc17cb7",
"assets/assets/images/logo.png": "38f2fd8bb185b3a39f0612e044da1ba3",
"assets/assets/images/profile.png": "7c4c4b16a806809de22e21fea3e63e89",
"assets/assets/images/bg_chat.jpeg": "895edfee85f8eadcd6a784a47d681ae6",
"assets/assets/icons/doctor.png": "7f42dc11a44f317001ea0314df94b46a",
"assets/assets/icons/chip-card-credit.png": "8e8f6079b8ca74653e811cb0103faf8d",
"assets/assets/icons/mastercard.png": "198941927932d858d30e8078e7e84a05",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
