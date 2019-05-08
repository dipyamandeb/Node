console.log('Starting notes.js'); 
 
module.exports.addNote = () => {   console.log('addNote');   return 'New note'; }; 
 
module.exports.add = (a, b) => {   return a + b; };

module.exports.data = [{id:1},{id:2},{id:2},{id:3},{id:4}];