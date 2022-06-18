// import fs module
const fs = require('fs');

// create readstream
const readStream = fs.createReadStream('./assets/payment.txt');

// listen to data event
readStream.on('data', data => {
  console.log('--------NEW DATA----------');
  console.log(data.toString())
})


