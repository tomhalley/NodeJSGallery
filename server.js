var http = require("http");

function onRequest(request, response) {
	console.log("Request Received");
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(8080);

console.log("Server has started.");
