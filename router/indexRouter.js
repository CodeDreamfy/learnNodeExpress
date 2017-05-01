var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {msg: 'hello index'})
  // nexst(new Error('haha'));
})

module.exports = router