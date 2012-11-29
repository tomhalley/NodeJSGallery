var exec = require("child_process").exec;
var view = require("../protected/view").view;

function start(response) {
	console.log("Request handler 'start' was called.");

	view('index.htm', true, function(html) {
		console.log("Request handler 'upload' was called.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");

	view('upload.htm', true, function(html) {
		console.log("Request handler 'upload' was called.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	});
}

function list(response) {
	console.log("Request handler 'list' was called.");

	exec("ls -lah", {timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

exports.start = start;
exports.upload = upload;
exports.list = list;