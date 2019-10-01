const http = require('http');
const fs = require('fs');
const url = require('url');
const {parse} = require('querystring');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if(url.parse(request.url).pathname === '/' && request.method == 'GET') {
        fs.readFile('./index.html', (err, data) => {
            response.end(data);
        });
    } else if (url.parse(request.url).pathname === '/' && request.method == 'POST') {
        let body = '';
        request.on('data', (data) => body += data);
        request.on('end', () => {
            let parm = parse(body);
            response.end('From: ' + parm.from + ' To: ' + parm.to + ' Text: ' + parm.text);
        });
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');