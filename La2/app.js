console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const _ = require('lodash'); 

console.log('Result:', notes.add(9, -2));

var user = os.userInfo(); 
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`); 
console.log(_.isString(true));   // answer - false 
console.log(_.isString('Andrew')); // answer – true 

console.log(_.uniqBy(notes.data,'id'));



