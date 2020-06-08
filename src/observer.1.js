const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

var simon = new Dog('simon');
simon.on('bark', () => {
  console.log('barked')
})
setTimeout(() => {
  simon.emit('bark')
}, 5000)