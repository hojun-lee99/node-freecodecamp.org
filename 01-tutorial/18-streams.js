const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt');

// default 64kb
// last buffer - remainder
// highWaterMark - control size of buffer
// const stream = createReadStream('./content/big.txt', { highWaterMark : 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf-8' })

stream.on('data', (result) => {
   console.log(result);
});
stream.on('error', (err) => console.log(err));
