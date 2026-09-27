'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0e76ae8e01f27d8056e9739f09830956",
".git/config": "f80db276710e48d6cac8f98245767c9b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e7ebddba8d25feec968665a8e9d0a7fb",
".git/gk/config": "ff8adf1fe43af8b9e6cebc09f0e2571f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b06696b3789149c9bded94dad2566c84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "307ad6ff855d436890438ed93af5f789",
".git/logs/refs/heads/master": "6f066916fe6dd54650072b3b8867d969",
".git/logs/refs/remotes/main/master": "e8cfee6fa5fd32e5c48d0ed63dfbf5f7",
".git/objects/05/a154d133e2ab17beee736a284e43f56a3f8344": "680dfb7b1cc9b595bc8e7190a392b157",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0c/9c3b4e4cbdee90ae9190119a9c4a9ab7795986": "9f19b26aff3bb8808c29a443d9768a5c",
".git/objects/0e/c6d25eb3195acbb05d97f4e4c878041f1d3d2e": "13ea169af5c1c5605d13bda5d3c99243",
".git/objects/10/25134faa718f0ba5a677d68ad4d49cc6816d11": "98113f02a05f2237fc95ed029cb440a7",
".git/objects/14/a9bd83875a2bb2d0366594fb2dd4087b8f1f47": "bf42537932ed71f58632aa1ee29c8144",
".git/objects/17/4ac3dec1d31a41d07ae559fbf4da877c7d6a50": "b1bf6ed67fb809bc657db478c34a8061",
".git/objects/17/62c345ab4eb4a253ef937f1b90176438bb22e4": "a02085fc331d55de39cb0a7834f1d398",
".git/objects/1b/2b43f8e2b0cb708f93b08a5f2e5fabc14be75e": "aace682cd9217d746a0388cadf0e0c27",
".git/objects/1e/f02964529ea6f982098e8f5969cda3431a999d": "0b94e07badfdddfe09174be16826e9d1",
".git/objects/20/9a1764373abb2952a2daf40eb98836701f654c": "bbc4ad59c68de255342a0e9efb9686d9",
".git/objects/23/0505b37faa314cfc24be11579c36b0e3732602": "13fcabfc8ef63dc35fc828e0724b2df0",
".git/objects/24/3181a55e430c9d35f2b3ce1d82e62d8a1df43c": "48ab3fe4957112644ce75192e9667c46",
".git/objects/2d/0c0e536707b90f5231f3941cd1e4a9c6ffdb45": "a8bf4322fb4a771305b48eb4d676cadf",
".git/objects/39/fc100855eb49242c8f28bcd8a7fc3b55c6ace7": "ecf2da98939018664ab032370669887f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/41/068a277926afd32e0b72cf01e07e4d1c3c80e9": "ce43eefed5fdd3282a14c781ddcc3751",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/acbe1f740532aa7199efb76d75b6356df556ba": "a3a32250e43f2c87b9a60e1c71308699",
".git/objects/4d/15207578e87756086845144fece04941798d75": "242c196123eb11702a2237d9c8500633",
".git/objects/4e/18bc2ba549d334b2a71a91cc75da135154738a": "cfc8da7506a217b94366472e01a01294",
".git/objects/4e/8fc5853a54e2fdc9a82ece8968c9ecb55bff2b": "a32c57c764e0bb0dc8777c646456e373",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/55/538efc391c845aeaa403d5e28bec742cab4c86": "19160e84551b893c2a653eb4ece4534f",
".git/objects/56/0fb02aa27ef804bf1a9e421454b7dfedf24b91": "6c023db710aab4d9195737d46ce7d17f",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/288d851172ed6c1f643c0464c815bc5f059095": "8d61a35c1de0df5f525804d2eac40336",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/40bb09c4474b980298508790fbd905c63cfcad": "b989184f0035a410f89a0504b99a250a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/84149191ad941c8214318eb7e582ca301a7365": "8f90a66219f8991847de76dd9d52d402",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ebadc62aa6dce40db15a9b199e2c112788add2": "a286d8c94c9cb7f2bd08f63f07fae1d6",
".git/objects/8a/0d71a25838be049bb15161e87feac7a70078c7": "4cfec380cb7f0de8ad77ab2f485a6bee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d2fac58dad26c14c28688531c6dcd6076176c4": "0bd447492018997af5851df9128939c7",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/bdd5109c0e7f44fc303bd3c16abe44bd496b2d": "c1594359470b8c842791c7589eb61e35",
".git/objects/9f/f9b1f05eb7e73d2f8085d0c0d93bc541fbd7d2": "1a9bfbe5792643b1970b3658a76bb5d8",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/16e5a02080364d71ba4f6af8f6e4f8d5da5004": "f61470e52dd075d345479e0e915b1165",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/625771a32498dbf9325f607b51fbb73d0813cc": "d3a3a2d300fe1e874326e5f68e179801",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c0/4188128734ed815e66f26422621d77015e7da0": "cd624a153132a79666184258898486ce",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/1bb6bc4f8fda60a194168162c7d4902620c214": "fa657ebf4039339a433b2ae7e0ea31ef",
".git/objects/cd/f62aa0440744211b038827b22ae9d5fb26f56b": "ca6c1b45151d01fea254fd884a9cb92a",
".git/objects/d1/721fdfeb8abbe9274928ef4fc8e6d08a9de698": "b660ce4657c052df2f1a91b6203736fd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/11927220b269b124bfc13c9628fa639ee43afc": "3bd2d2fb7e1c09d52c9e685281ac2aae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/f0d87792898268bc2e9d54409fff1413c1fcc1": "df533a543c91a21a002d360cdf21bdef",
".git/objects/e1/44df7c708ae91f1f088753ab0c0be70288d0d3": "e9c2fd8e9a5b2e875cbb37061c6a0e3e",
".git/objects/e2/a65efc5f5b662cca139b392bf76d78f79f8e08": "98fba1112fd59b8e0a332afcaf80b57c",
".git/objects/e3/7c75b6981fb4f9317d1df9b1592544260bcb36": "579667e2d55abf7ae05b9eb20855e175",
".git/objects/e6/014e08fe25cd5e1e43e12f68017b422f62e226": "beee2748c9eddd3a28448eb27ec1c27b",
".git/objects/e9/4e2a0f609c45a00b47c31cbff57db71ed07269": "720171ff173c4db8eb35731c79713c3e",
".git/objects/e9/654a0c274c74ba1b97e7b1566eb6708823540c": "7afb0a6e137af234b2f9c5b9638135bd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/9ea166911adfac835892769baa4432768c74b9": "34672896c5b49a4e678546fb10c5cbcd",
".git/objects/ea/f67e2d5bf91ded0c0c1b97675ccc1715247dab": "aca6f9837c980b817448dde03928b8e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c501b1c1c01ac0fb10993d18e7cd807c74357d": "75485060a9fc6656fc04681362910078",
".git/objects/f0/3fc1852c1a9d27dd97f9c731b2845fd9184aca": "c0d6d40b329f5c04045b57da9c18b0c0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/d1f5cd0dffdcec516314acb32a84769b21de51": "a7bf5bab3c831975e11e2427ba1688c3",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/9c10292d40a15f9578206c180c53f7458015a4": "935a5e58fff38ffb68c6b3606c801d73",
".git/objects/fc/b425b95c3eaffa6cfe05f0d1d5da498bf17b6b": "7119d59ebe793e7929c4eb2dd5bc8cff",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/info/commit-graphs/commit-graph-chain": "fdfbc7ab646de2b8646b441dcaa475d5",
".git/objects/info/commit-graphs/graph-e6e09ad6ede4fe499375e518f564859379abdaa2.graph": "51670630a03b4e02b8874d2e565ca732",
".git/ORIG_HEAD": "aa95f009467f5569c0c6371df2821354",
".git/refs/heads/master": "aa95f009467f5569c0c6371df2821354",
".git/refs/remotes/main/master": "aa95f009467f5569c0c6371df2821354",
"ads.txt": "2cbb8c424afa38ba7a9b11010f7b7277",
"assets/AssetManifest.bin": "76b465cfa0348efeb9c36b408188633c",
"assets/AssetManifest.bin.json": "f7e9b2810dde8746c043567f8692af88",
"assets/assets/images/avatarBoy.png": "87adafbc31eada9a8f619d8b83e2cfca",
"assets/assets/images/avatarGirl.png": "93a9645cd2a768eb329f0018b590bc12",
"assets/assets/images/fondo.jpg": "8e3b6798ee5cf965e640605e661136bb",
"assets/assets/images/newLogo.png": "c32fd4221a48fbf44c3a5fe6b8110525",
"assets/assets/images/newLogoL.png": "a670735d86179c6a4aab27041429ec6a",
"assets/assets/images/newLogoM.png": "4bc6cdd0fb70633583d5accafeb6da47",
"assets/assets/images/newLogoS.png": "f2d329237a89bd363b1d76bf5568c25f",
"assets/assets/images/somosguaches_logo.jpg": "02cef8d74c398fc79a512fa9924a461f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3a91dd83aa13fd6a64dd25a30ccb8d3a",
"assets/NOTICES": "1e4ddaf8ccb9e953bdc229e7bc109bcd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "c32fd4221a48fbf44c3a5fe6b8110525",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e0f158079935660d2086aa76f28955e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c57cac31587851c6b4c29d65f933ec23",
"/": "c57cac31587851c6b4c29d65f933ec23",
"main.dart.js": "b7f8de68623d263280489957655acdd4",
"manifest.json": "927ed9697a9eaa8f10f240c8fb2f9853",
"version.json": "c6ed6f164c596b2bc17a5a9f2703ebf9"};
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
