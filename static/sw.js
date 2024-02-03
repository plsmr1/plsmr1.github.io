importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

const { StaleWhileRevalidate, CacheFirst } = workbox.strategies;
const { precacheAndRoute } = workbox.precaching;
// This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');
workbox.setConfig({ debug: false });

precacheAndRoute([{ url: "/offline/index.html", revision: null }]);

workbox.routing.registerRoute(
({ request }) => {
    return (
    request.destination === "style" ||
    request.destination === "document" ||
    request.destination === "image"
    );
},
new StaleWhileRevalidate({
    cacheName: "my-cache",
    plugins: [
    new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
    }),
    new workbox.expiration.ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 365 * 24 * 60 * 60,
    }),
    ],
})
);

workbox.routing.registerRoute(
({ request }) => {
    return request.destination === "image";
},
new CacheFirst({
    cacheName: "image-cache",
    plugins: [
    new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
    }),
    new workbox.expiration.ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 365 * 24 * 60 * 60,
    }),
    ],
})
);

workbox.routing.setCatchHandler(({ event }) => {
switch (event.request.destination) {
    case "document":
    return caches.match("/offline/index.html");
    default:
    return Response.error();
}
});


// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
/\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
new workbox.strategies.CacheFirst({
    plugins: [
    new workbox.expiration.Plugin({
        maxEntries: 500,
        maxAgeSeconds: 365 * 24 * 60 * 60
    })
    ]
})
);
