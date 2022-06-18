// import https module
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Request made');
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = '../views/';
    switch(req.url) {
        case '/':
        path += 'index.html';
        break;

        case '/about':
        path += 'about.html'
        break;

        default:
        path += '404.html';
        break;
    }

    // send html file
    fs.readFile(path, (err,data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    });
    
})

// listen to a port
let port = 4000;

server.listen(port, 'localhost', () => {
    console.log(`Listening for request on port ${ port }`);
})