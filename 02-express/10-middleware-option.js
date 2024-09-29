const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

// 1. use vs route
// 2. option - our own / express / third party
// our own
// app.use([authorize, logger]);
// express
// app.use(express.static('./public'))
// third party
app.use(morgan('tiny'));

app.get('/', (req, res) => {
   res.send('home');
});

app.get('/about', (req, res) => {
   res.send('about');
});

app.get('/api/products', (req, res) => {
   res.send('products');
});

app.get('/api/items', (req, res) => {
   console.log(req.user); // name: john, id: 3
   res.send('items');
});

app.listen(5001, () => {
   console.log('Server is listening on port 5001...');
});
