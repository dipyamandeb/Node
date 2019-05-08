const logger = require('./logger');

const EventEmitter = require('events');
const emitter =  new EventEmitter();


//Register a listener

emitter.on('logging',(arg)=>{
console.log('listener called',arg);
})


emitter.emit('logging',{data: 'message'});

