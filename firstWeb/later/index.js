const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const articles = [{ title: 'Example' }];

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); // 支持编码为 json 的请求消息体
app.use(bodyParser.urlencoded({ extended: true })); // 支持编码为表单的请求消息提

app.get('/articles', (req, res, next) => {
  res.send(articles);
});

app.post('/articles', (req, res, next) => {
  const article = { title: req.body.title };
  article.push(article);
  res.send(article);
});

app.get('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  res.send(articles[id]);
});

app.delete('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  delete articles[id];
  res.send({ message: 'Deleted' });
});

app.listen(app.get('port'), () => {
  console.log(`Express web app avliable at localhost: ${port}`);
});

module.exports = app;