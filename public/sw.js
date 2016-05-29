this.addEventListener("fetch", event => {
	const url = new URL(event.request.url);
	if (url.pathname.endsWith(".jpg")) {
		event.respondWith(
			fetch("images/haha.jpg")
		);
	}
});
