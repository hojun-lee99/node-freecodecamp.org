const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
   res.send('<h1> Home page </h1><a href="/api/product">product</a>');
});
// product id, name, image 데이터 전송
app.get('/api/product', (req, res) => {
   const newProducts = products.map((products) => {
      const { id, name, image } = products;
      return { id, name, image };
   });

   res.json(newProducts);
});
// porductId에 해당하는 데이터 전송
app.get('/a달i/product/:productID', (req, res) => {
   console.log(req.params);
   const { productID } = req.params;

   const singleProduct = products.find(
      (product) => product.id === Number(productID),
   );

   if (!singleProduct) {
      return res.status(404).send(`Product does not exist!`);
   }

   res.json(singleProduct);
});
//url에서 다수의 파라미터를 받을 경우
app.get('api/product/:productID/reviews/:reviewID', (req, res) => {
   console.log(req.params);
   app.send('hello world!');
});
// 쿼리문 처리 제품명 검색과 출력 데이터 크기 제한
app.get('/api/v1/query', (req, res) => {
   console.log(req.query);

   const { search, limit } = req.query;
   // ...스프레드 연산자를 이용하여 products 데이터 얕은 복사
   let sortedProducts = [...products];

   // search로 시작하는 name을 가진 제품 데이터 필터
   if (search) {
      sortedProducts = sortedProducts.filter((product) => {
         return product.name.startsWith(search);
      });
   }
   // limit크기 만큼 데이터 slice
   if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
   }
   // sortedProdect가 없을 경우
   if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ success: true, data: [] });
   }
   // search와 limit가 없을 경우 원본 데이터 출력
   return res.status(200).json(sortedProducts);
});

app.listen(5001, () => {
   console.log('Server is listening on port 5001 ...');
});
