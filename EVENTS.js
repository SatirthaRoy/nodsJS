const eventEmitter = require('events');

const customEvent = new eventEmitter();

customEvent.on('response', ()=> {
  console.log('event took place');
});

customEvent.on('response', (name, id)=> {
  console.log('event took place again', name, id);
});

customEvent.emit('response', 'khanki', 12);