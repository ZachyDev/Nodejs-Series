const http = require('https');

// create a server
const server = http.createServer((req,res) => {
    console.log('Request made');
})

const port = 4000;

// listen to a port number
server.listen(port, 'localhost', () => {
    console.log(`Listening for request on port ${ port }`);
})