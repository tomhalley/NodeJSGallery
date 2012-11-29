var http = require('http');
var fs = require('fs');

function view(pathIn, useTemplate, callback) {
	var 
	header,
	footer;

	if(useTemplate) {
		header = fs.readFileSync('./views/templates/header.htm', 'utf8');
		footer = fs.readFileSync('./views/templates/footer.htm', 'utf8');
	}

	fs.readFile("./views/" + pathIn, 'utf8', function(err, html) {
		if(err) throw err;
		callback(header + html + footer);
	});
}

exports.view = view;