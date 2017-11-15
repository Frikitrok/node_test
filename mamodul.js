
/* module.exports = function(dirname, ext, callback) {   //modul with callback
 	var fs = require('fs'); //read dir and chack for match
	 fs.readdir(dirname, (err, data) => {
	 	if (err) return callback(err);
	 	data.forEach(function(elem) {
	 		let massElem = elem.match('.' + ext)
	 		if(massElem != null) {
	 			callback(null, massElem);
	 		}
	 	});
	 })  	
}
*/