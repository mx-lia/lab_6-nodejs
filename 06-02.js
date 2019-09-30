const http = require('http');
const fs = require('fs');
const url = require('url');
const sendmail = require('sendmail');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if(url.parse(request.url).pathname == '/') {
        fs.readFile('./index.html', (data, err) => {
            response.end(data);
        });
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');