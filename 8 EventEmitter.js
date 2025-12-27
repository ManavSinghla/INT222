import eventEmitter from 'events';

const emitter= new eventEmitter();

emitter.on("login",()=>{
    console.log("User loged in");
})
emitter.emit("login");