// import http module
const http = require('http');
// fs module
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('Request has been made');
    // console.log(req.url);
    // console.log(req.method)
    
    // setting header
    res.setHeader('Content-Type', 'text/html');
        let path =  '../views/';

        // switch
        switch(req.url) {
            case '/':
            path += 'index.html'
            break;

            case '/about':
            path += 'about.html'
            break;

            default:
            path += '404.html'
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