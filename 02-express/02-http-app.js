const http = require('http');
const { readFileSync, read } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
   // console.log(req.method)
   const url = req.url;
   console.log(url);
   // home page
   if (req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(homePage);
      res.end();
   }
   // homeStyles
   else if (req.url === '/styles.css') {
      res.writeHead(200, { 'content-type': 'text/css' });
      res.write(homeStyles);
      res.end();
   }
   // homeLogo
   else if (req.url === '/logo.svg') {
      res.writeHead(200, { 'content-type': 'image/svg+xml' });
      res.write(homeImage);
      res.end();
   }
   // home js
   else if (req.url === '/browser-app.js') {
      res.writeHead(200, { 'content-type': 'text/javascript' });
      res.write(homeLogic);
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
