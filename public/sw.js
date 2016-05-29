this.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => response || fetch(event.request))
		.catch(() => {
			if(event.request.mode === "navigate") {
				return caches.match("index-offline.html");
			}
		})
	);
});

this.addEventListener("install", (event) => {
	console.log("installing....");

	event.waitUntil(
		caches.open("v1").then(cache => 
			cache.addAll([
				"index-offline.html",
				"style.css"
			])
		)
	);
});