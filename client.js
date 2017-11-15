var http = require("http");  //client post for uppercase
var options = {
  hostname: '127.0.0.1',
  port: 100,
  method: 'GET',
  path: '/api/parsetime',
  headers: {
      'Content-Type': 'application/json',
  }
};

var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
const querystring = require('querystring');
var toReq = querystring.stringify({iso: '2013-08-10T12:10:15.474Z', corge: '' });
console.log(toReq);
req.write(toReq);
//req.end('by');


/*var http = require("http");  //client post for uppercase
var options = {
  hostname: '127.0.0.1',
  port: 100,
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};

var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
req.write('Hello');
req.end('by');
*/

/*var net = require('net');  //tcp client on sockets

var client = new net.Socket();
client.connect(100, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});*/