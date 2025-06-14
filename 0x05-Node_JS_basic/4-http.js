const app = require('http');

app.createServer((request, response) => {
  response.write('Hello ALX!');
  response.end();
}).listen(1245);

module.exports = app;
