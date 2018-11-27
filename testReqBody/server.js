const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/test') {
    data = ''
    req.on('data', chunk => {
      data += chunk.toString();
      console.log('data', chunk.toString());
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end('Hi, ' + data);
    });
  }
}).listen(3300);