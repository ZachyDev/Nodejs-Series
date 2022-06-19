// import http module
const http = require('http');
// fs module
const fs = require('fs');

const server = http.createServer((req,res) => {

    // setting header
    res.setHeader('Content-Type', 'text/html');
        let path =  '../views/';

        // switch
        switch(req.url) {
            case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;

            case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;

            default:
            path += '404.html'
            res.statusCode = 404;
            break;
        }

        fs.readFile(path, (err,data) => {
            
            if (err) {
                console.log(err);
            }
            else {
                res.write(data);
                res.end();
            }
        });

   
})

let port = 3000;

server.listen(port, 'localhost', () => {
    console.log(`App listening on port ${ port }`);
})