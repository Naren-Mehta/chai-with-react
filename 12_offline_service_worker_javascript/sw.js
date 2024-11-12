const CACHE_NAME = "sw_app/v1";

self.addEventListener("install", (e) => {
  console.log("install SW");

  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        "./index.html",
        "./style.css",
        "./test.jpg",
        "./script.js",
      ]);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if(key !== 'sw_app/v1'){
          return caches.delete(key);
        }
      }));
    })
  )

});

self.addEventListener("fetch", (e) => {
  console.log("Fetching from SW");

  // offline experience
  // whenever a file is requested
  // 1. Fetch from network, update my cache 2. cache as a fallback
  //

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // update my cache, if network call happend - Online mode
        const cloneData = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });
        return res;
      })
      .catch((err) => {
        console.log("==returning from cache======")
        return caches.match(e.request).then((file) => file);
      })
  );
});
