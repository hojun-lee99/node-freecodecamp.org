const express = require('express');
const app = express();

app.get('/', (req, res) => {
   console.log('user hit the home');
   res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
   console.log('user hit the about');
   res.status(200).send('About Page');
});

app.all('*', (req, res) => {
   console.log(`404 not found url is ${req.url}`);
   res.status(404).send('<h1>404 not found</h1>');
});

app.listen(5001, () => {
   console.log('server is listening on port 5001 ...');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
