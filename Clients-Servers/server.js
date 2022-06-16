// import https module
const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Request made');
})

// listen to a port
let port = 3000;

server.listen(port, 'localhost', () => {
    console.log(`Listening for request on port ${ port }`);
})