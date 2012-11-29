function errmsg(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.end("404 Not found");
}

exports.errmsg = errmsg;