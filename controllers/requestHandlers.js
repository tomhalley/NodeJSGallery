var 
exec 		= require("child_process").exec,
view 		= require("../protected/view").view,
fs          = require('fs'),
sys 		= require('sys'),
formidable 	= require("formidable");

function start(response, request) {
	console.log("Request handler 'start' was called.");

	view('index.htm', true, function(html) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	});
}

function upload(response, request) {
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();

	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		if(error) console.log(error);
		console.log("parsing done");

		fs.rename(files.file.path, "./views/upload/" + files.file.name, function(err) {
			if(err) {
				fs.unlink("./views/upload/" + files.file.name);
				fs.rename(files.file.path, "./views/upload/" + files.file.name);
			}
		})
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Image uploaded.<br>");
		response.end('<a href="/">Return to home page</a>');
	});
}

function get_images(response, request) {
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