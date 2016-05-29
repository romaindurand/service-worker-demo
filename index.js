"use strict";

process.env.PORT = process.env.PORT || 80;
var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/images.json", (req, res) => {
	res.json({
		images: [
			"internet.jpg",
			"wat.jpg",
			"inception.jpg"
		]
	});
});

var server = require("http").createServer(app);
server.listen(process.env.PORT, "127.0.0.1", () => {
	console.log("Express server listening on " + process.env.PORT);
});

exports = module.exports = app;
