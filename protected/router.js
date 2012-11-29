var fs = require('fs');
var getMimeType = require('./simple-mime.js')('application/octect-stream');

function route(handle, pathname, response) {
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {

		var url = pathname.split('/');
		var dir = fs.readdirSync('./views/' + url[1]);

		if(dir[url[2]] !== 'undefined') {
			fs.readFile('./views' + pathname, 'utf8', function(err, html) {
				response.writeHead(200, {"Content-Type": getMimeType(pathname)});
				response.write(html);
				response.end();
			});
		} else {
			console.log("No request handler found for " + pathname);
			response.writeHead(404, {"Content-Type": "text/plain"});
	    	response.write("404 Not found");
			response.end();
		}
	}
}

exports.route = route;