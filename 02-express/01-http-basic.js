const http = require('http');

const server = http.createServer((req, res) => {
   // home page
   if (req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>home page</h1>');
      res.end();
   }
   // about page
   else if (req.url === '/about') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>about page</h1>');
      res.end();
   }
   // 404 not found
   else {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write('<h1>404 Page Not Found!</h1>');
      res.end();
   }
});

server.listen(5001);
