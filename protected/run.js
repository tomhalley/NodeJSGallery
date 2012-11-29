var server = require("./server");
var router = require("./router");
var requestHandlers = require("../controllers/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/list"] = requestHandlers.list;

server.start(router.route, handle);