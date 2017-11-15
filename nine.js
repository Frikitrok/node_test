const fs = require('fs');
fs.readFile('example.txt', function (err, data) {
   if (err) {
      console.log(err);
      return;
   }
   console.log(data);
});
console.log('end');