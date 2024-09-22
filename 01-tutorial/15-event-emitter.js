const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
   console.log(`data reviecved ${name}, ${id}`);
});

customEmitter.on('hello', () => {
   console.log('hello there');
});

customEmitter.emit(`response`, 'john', '25');
customEmitter.emit('hello');
