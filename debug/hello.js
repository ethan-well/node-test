const http = require('http');
const port = 3300;

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end('Hello, world');
});

server.listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port);
})