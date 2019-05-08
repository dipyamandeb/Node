const http = require('http');

const server = http.createServer();
// create a web server // The web server is an event emitter  const server = http.createServer(); 

// when server is emitting an event, we will provide a handler to handle it // add the code here to handle the event 

server.listen(3000);

console.log("Listening on port 3000");

// when server is emitting an event, we will provide a handler to handle it 
server.on('connection', function (socket) {
    console.log("new connection...");


    if (req.url === '/') { res.write('Hello World'); res.end(); }

    if (req.url === '/api/courses') {
        res.write("Get list of courses from database");
        res.end();
    }
});

