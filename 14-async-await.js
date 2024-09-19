const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const wirteFilePromise = util.promisify(writeFile);

const start = async () => {
   try {
      const first = await readFilePromise('./content/first.txt', 'utf-8');
      const second = await readFilePromise('./content/second.txt', 'utf-8');
      await wirteFilePromise(
         './content/result-mind-grenade.txt',
         `This Is Awesome : ${first} ${second}`,
         { flag: 'a' },
      );

      console.log(first, second);
      console.log(second);
   } catch (error) {
      console.log(error);
   }
};

start();

// const getText = (path) => {
//    return new Promise((resolve, reject) => {
//       readFile(path, 'utf-8', (err, data) => {
//          if (err) {
//             reject(err);
//          } else {
//             resolve(data);
//          }
//       });
//    });
// };

// getText('./content/first.txt')
//    .then((result) => console.log(result))
//    .catch((err) => console.log(err));
