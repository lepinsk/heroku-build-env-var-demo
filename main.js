// heroku-build-env-var-demo
// main.js

var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(process.env.HEAD_HASH);
}).listen(process.env.PORT || 3000);

setInterval(function(){
	console.log("process.env.HEAD_HASH=" + process.env.HEAD_HASH);
}, 1000);