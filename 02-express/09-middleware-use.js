const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// 모든 요청에 logger 함수 미들웨어 적용
// use문 위에 있는 코드는 적용 되지 않음
// app.use(logger);
// /api 경로를 지정하여 미들웨어 적용
// app.use('/api', logger);
// 미들웨어 여러개 적용할려면 배열을 사용
app.use([authorize, logger]);

app.get('/', (req, res) => {
   res.send('home');
});

app.get('/aboud', (req, res) => {
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
