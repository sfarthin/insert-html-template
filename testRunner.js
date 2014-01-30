var express = require('express');
var app = express();
app.use(express.static(__dirname+"/example"));
app.listen(9998);

var server = require('karma').server;
server.start({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    files: [
		"insertHTML.js",
		'tests/*.js'
	],
	proxies: {
		'/example': 'http://localhost:9998',
	},
    exclude: [],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    autoWatch: false,
    browsers: ["Chrome", "Firefox", "Safari"],
    captureTimeout: 6000,
    singleRun: true
}, function(exitCode) {
	process.exit(exitCode);
});