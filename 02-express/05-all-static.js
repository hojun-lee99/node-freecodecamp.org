const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//    res.sendfile(path.resolve(__dirname, './navbar-app/index.html'));
//    adding to static assets
//    SSR
// });

app.all('*', (req, res) => {
   res.status(404).send('404 not found');
});

app.listen(5001, () => {
   console.log('server is listening on port 5001 ...');
});
