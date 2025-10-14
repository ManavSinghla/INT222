const EvenEmitter = require('events');

const myEmitter = new EvenEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.emit('greet', 'Alice');
myEmitter.emit('greet', 'Bob');

const EvenEmitter2 = require('events');
class BankingSystem extends EvenEmitter(){
    
}