fetch("images.json")
.then(response => response.json())
.then(jsonData => {
	jsonData.images.forEach(image => {
		var img = new Image();
		img.src = `images/${image}`;
		document.getElementById("imagesContainer").appendChild(img);
	});
});
