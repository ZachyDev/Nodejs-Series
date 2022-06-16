// import https module
const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Request made');
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="style.css"></head>')
    res.write('<p>Hello ZachyDev</p>');
    res.write('<p>Hello again ZachyDev</p>');
    res.end();
})

// listen to a port
let port = 3000;

server.listen(port, 'localhost', () => {
    console.log(`Listening for request on port ${ port }`);
})