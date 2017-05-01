var express = require('express');
var app = express();
var indexRouter = require('./router/indexRouter');
var path = require('path');
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

app.set('view engine', 'njs');// 设置模板引擎为 

app.use('/', indexRouter)

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(3002)