const http = require('http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end('Hello ALX!');
}).listen(1245);

module.exports = app;
