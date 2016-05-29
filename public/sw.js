this.addEventListener("fetch", event => {
	const url = new URL(event.request.url);
	if (url.origin === location.origin && url.pathname === "/") {
		event.respondWith(caches.match("index.html"));
		return;
	}
	event.respondWith(
		caches.match(event.request)
		.then(response => response || fetch(event.request))
	);
});

this.addEventListener("install", (event) => {
	console.log("installing....");

	event.waitUntil(
		caches.open("v1").then(cache => 
			cache.addAll([
				"index.html",
				"style.css",
				"images.json",
				"images/internet.jpg",
				"images/wat.jpg",
				"images/inception.jpg",
				"script.js"
			])
		)
	);
});