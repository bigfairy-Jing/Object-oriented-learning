const EventEmitter = require('events').EventEmitter;


const emitter1 = new EventEmitter();
//监听 some 事件
emitter1.on('some', info => {
  console.log('fn1', info)
});
//监听 some 事件
emitter1.on('some', info => {
  console.log('fn2', info)
});
//监听 some 事件
emitter1.on('some', info => {
  console.log('fn3', info)
});


emitter1.emit('some', 'xxxx')
