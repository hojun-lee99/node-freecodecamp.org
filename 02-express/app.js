const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

// **middleware**
// static asset
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

//add router
app.use('/login', auth);
app.use('/api/people', people);

// **http request**
app.get('/login/test', (req, res) => {
   res.send('test');
});

app.listen(5001, () => {
   console.log('Server is listening on port 5001...');
});
