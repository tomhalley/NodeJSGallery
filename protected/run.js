var server = require("./server");
var router = require("./router");
var requestHandlers = require("../controllers/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/get_images"] = requestHandlers.get_images;

server.start(router.route, handle);