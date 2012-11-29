var fs = require('fs');
var getMimeType = require('./simple-mime.js')('application/octect-stream');

function route(handle, pathname, response) {
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {

		var url = pathname.split('/');

		fs.readdir('./views/' + url[1], function(err, data) {
			if(data[url[2]] !== 'undefined') {
				if(url[1] == "img") {
					console.log("File is an image");
					fs.readFile('./views' + decodeURIComponent(pathname), 'utf8', function(err, data) {
						response.writeHead(200, {"Content-Type": getMimeType(pathname)});
						response.end(data, 'binary');
					});
				} else {
					fs.readFile('./views' + decodeURIComponent(pathname), 'utf8', function(err, data) {
						response.writeHead(200, {"Content-Type": getMimeType(pathname)});
						response.end(data);
					});
				}
			} else {
				console.log("No request handler found for " + pathname);
				response.writeHead(404, {"Content-Type": "text/plain"});
				response.end("404 Not found");
			}
		});
	}
}

exports.route = route;