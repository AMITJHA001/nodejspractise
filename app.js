const http = require('http');
const HandlerCode = require('./route');
const server = http.createServer(HandlerCode);

server.listen(3000);
