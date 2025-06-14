const app = require('http');

app.createServer((request, response) => {
  response.statusCode = 200;
  response.end('Hello ALX!');
}).listen(1245);

module.exports = app;
