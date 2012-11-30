var exec = require("child_process").exec;
var view = require("../protected/view").view;
var fs = require('fs');

function start(response) {
	console.log("Request handler 'start' was called.");

	view('index.htm', true, function(html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World!");
	response.end();
}

function get_images(response) {
	console.log("Request handler 'get_images' was called.");

	fs.readdir('./views/upload', function(err, images) {
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(JSON.stringify(images));
		response.end();
	});
}

exports.start = start;
exports.upload = upload;
exports.get_images = get_images;