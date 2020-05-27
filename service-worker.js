const CACHE_NAME = "assetPWA_v5";
const isiAsset = [
    "/",
    "/index.html",
    "/asset/box.svg",
    "/asset/dark_theme.jpg",
    "/asset/dark_theme2.jpg",
    "/asset/dark_theme3.jpg",
    "/asset/x-box.jpg",
    "/css/index.css",
    "/css/materialize.min.css",
    "/js/index.js",
    "/js/nav.js",
    "/js/materialize.min.js",
    "/manifest.json"
];

// memasukkan isi asset ke service worker
self.addEventListener("install",function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(isiAsset);
        })
    )
})

// penggunaan asset dari service worker
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request, {cacheName: CACHE_NAME})
        .then(function(response){
            if(response){
                return response;
            }
            console.log("service worker from :", event.request.url);
            return fetch(event.request);
        })
    )
})

// penghapusan service worker lama 
self.addEventListener("activate",function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(function(namaData){
                    if(namaData != CACHE_NAME){
                        console.log("service worker "+ namaData +" telah dihapus");
                        return caches.delete(namaData);
                    }
                })
            );
        })
    );
});