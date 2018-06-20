importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "order-pwa-poc",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.41a0e116f7a119c0d828.js",
    "revision": "6cc564128669c94d037bd0315cbcff20"
  },
  {
    "url": "/_nuxt/layouts/default.6de1868c603fcd6679d6.js",
    "revision": "c6433ebf49eb782fdda87206a82cfb4f"
  },
  {
    "url": "/_nuxt/manifest.120393d3e37b7cf91096.js",
    "revision": "fd40d729a3f31772ee6f372b9a3bdcae"
  },
  {
    "url": "/_nuxt/pages/catolog.d3dc9f852c8ce9f0c545.js",
    "revision": "c2cb982f6108a709eba37fcef23de137"
  },
  {
    "url": "/_nuxt/pages/index.117bafdc737a0b64748e.js",
    "revision": "c65e751326d6970e28416871c13eff8c"
  },
  {
    "url": "/_nuxt/vendor.14643f6166d3a87f9ab2.js",
    "revision": "0ac2c27b1bd64b1a9ff86f4c35eddac7"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

