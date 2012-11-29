var exec = require("child_process").exec;
var view = require("../protected/view").view;
var fs = require('fs');

function start(response) {
	console.log("Request handler 'start' was called.");

	view('index.htm', true, function(html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(html);
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");

	view('upload.htm', true, function(html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(html);
	});
}

function get_images(response) {
	console.log("Request handler 'get_images' was called.");

	fs.readdir('./views/img', function(err, images) {
		response.writeHead(200, {"Content-Type": "application/json"});
		response.end(JSON.stringify(images));
	});
}

exports.start = start;
exports.upload = upload;
exports.get_images = get_images;