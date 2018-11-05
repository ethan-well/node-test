var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  fs.readFile('./titles.json', function(err, titles) {
    if(err) return hadError(err, res);
    console.log(Object.prototype.toString.call(titles));
    console.log(titles instanceof Array);
    getTemplate(titles.toString(), res);
  });
}).listen(3000);

function hadError(err, res) {
  res.end('Had some err' + err);
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', function(err, data) {
    if (err) return hadError(err, res);
    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, template, res) {
  titles = JSON.parse(titles);
  var html = template.replace('%', titles.join('</li><li>'));
  res.end(html);
}