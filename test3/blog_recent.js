var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile('./title.json', function(err, data) {
      if (err) {
        console.log(err);
        console.log('Server Error');
      } else {
        var title = JSON.parse(data.toString());
        fs.readFile('./template.html', function(err, data) {
          if (err) {
            console.log(err);
            console.log('Server Error');
          } else {
            var tmp1 = data.toString();
            var html = tmp1.replace('%', title.join('<li><li/>'));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
          }
        });
      }
    });
  }
}).listen(8000);