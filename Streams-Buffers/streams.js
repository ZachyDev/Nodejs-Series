const fs = require('fs');

const readStream = fs.createReadStream('./assets/payment.txt');

readStream.on('data', data => {
    console.log('--------New Data --------');
    console.log(data.toString());
})