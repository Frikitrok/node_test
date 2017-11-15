

 var http = require('http'); //post server for uppercase
 var server = http.createServer(function (req, res) {
   // request handling logic...
   console.log('have conection');
   console.log(req.headers);
   res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.write('got u');

  	req.on('data', (data) => {
  		data = data.toString();
  		console.log('send: ' + data.toUpperCase());
  		res.write(data.toUpperCase());
  	})

  	//res.end(''); for finish conection send
 })

 server.listen(100);


 console.log('server up');

/*var net = require('net'); //server with time and close session on socket tcp
var strftime = require('strftime');
var time = strftime('%F %T', new Date(1307472705067));


var server = net.createServer(function (socket) {
// socket handling logic
	 //socket.write('hi');
	 socket.end('\n' + time);
})
server.listen(process.argv[2]);
console.log('server started');*/


/*var http = require('http');  //get module for sync request 2+ links
function kek(arg) {
	let a = arg - 1; //
	http.get( process.argv[a], (res) => {
		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', (chunk) => { rawData += chunk; });
		res.on('end', () => {
			try {
				if(a > 2) {
					kek(a);
				}
		  		console.log(a);
			} catch (e) {
			  console.error(e.message);
			}
		});
		response.on("data", function (data) { console.log(data); })
		response.on("error", function (error) { console.log(error); })
	});
}

kek(process.argv.length);*/

/*
for(var i = 2; i < process.argv.length; i++) {
	let a = i - 1;
	http.get(process.argv[2], (res) => {
		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', (chunk) => { rawData += chunk; });
		res.on('end', () => {
			try {
				if(a < process.argv.length)
			  console.log(a);
			} catch (e) {
			  console.error(e.message);
			}
		});
		response.on("data", function (data) { console.log(data); })
		response.on("error", function (error) { console.log(error); })
	});
}
 */


/*var bl = require('bl'); 			//pipi bl
var http = require('http');
http.get(process.argv[2], (resp) => {
	 resp.pipe(bl(function (err, data) { 
	 	if (err) throw err;
	 	console.log(data.toString());
	 }))
});
*/
/*var http = require('http');  //get module
http.get(process.argv[2], (response) => {
	response.setEncoding('utf8');
	response.on("data", function (data) { console.log(data); })
	response.on("error", function (error) { console.log(error); })
});*/

/*
var mymodule = require('./mamodul.js');		// collback from modul
mymodule(process.argv[2], process.argv[3], function(err, data) {
	if (err!=null) {
		console.log(err);
	} else {
		console.log(data);
	}
});
console.log('asd');
*/

/* var fs = require('fs'); 			//read dir and chack for match
 fs.readdir(process.argv[2], (err, data) => {
 	if (err) throw err;
 	data.forEach(function(elem) {
 		let massElem = elem.match('.'+process.argv[3])
 		if(massElem != null) {
 			console.log(massElem.input);
 		}
 	});
 }) 
*/

/*var fs = require('fs'); 		//assync read file
fs.readFile(process.argv[2], 'utf-8', function callback (err, data) { 
	if (err) throw err;
	var lines = data.split(/\r\n|\r|\n/).length - 1;
 	console.log(lines);
 });*/

//process.argv - massive with all args to node
//fs module to work with data
//var fs = require('fs');  take a module to variable
//var buf = fs.readFileSync(process.argv[2]).toString();  work with buffer