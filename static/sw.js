importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "rebel-headquarters-sandbox-test",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8862f17b42c3d1211d27.js",
    "revision": "c47d74afc3c8cd6a6b5e3dbbe05aef0e"
  },
  {
    "url": "/_nuxt/layouts/default.782fb50f53236c103ab3.js",
    "revision": "aed83f19e214f77e43e9ede90179af39"
  },
  {
    "url": "/_nuxt/manifest.9f8f094e10c221a6a63e.js",
    "revision": "8758159de7747ea4fc15f1098584a935"
  },
  {
    "url": "/_nuxt/pages/index.5316e573cf490d76b7eb.js",
    "revision": "70dcd67191a0fde8107313e23f158cf0"
  },
  {
    "url": "/_nuxt/pages/resume.1c2ea9ba6c66a9b98413.js",
    "revision": "26dfe3afff23cfb6ee96452e4246d322"
  },
  {
    "url": "/_nuxt/vendor.9af420cceaa6eb552a5e.js",
    "revision": "1c52e27ddcec242663fc357e0b735d54"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

