const express = require('express');
const app = express();

// req => middleware => res
// req가 오면 logger 함수가 실행 되고 난뒤 res.send()
// method url 접속년도를 찍는 미들웨어
const logger = (req, res, next) => {
   const method = req.method;
   const url = req.url;
   const date = new Date().getUTCFullYear();
   console.log(method, url, date);
   next();
};

app.get('/', logger, (req, res) => {
   res.send('Home');
});

app.get('/about', logger, (req, res) => {
   res.send('About');
});

app.listen(5001, () => {
   console.log('Server is listening on port 5001...');
});
