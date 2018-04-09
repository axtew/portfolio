var express = require('express');
var router = express.Router();

const newData = require('../src/data.json');

router.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

router.get('/about-me', function (req, res) {
  //res.send('Hello World!')
  res.render('about-me', { title: 'Hey', message: 'Hello there!' })
});

router.get('/admin', function (req, res) {
  //res.send('Hello World!')
  res.render('admin', { title: 'Hey', message: 'Hello there!' })
});

router.get('/blog', function (req, res) {
  //res.send('Hello World!')
  res.render('blog', { title: 'Hey', message: 'Hello there!' })
});

router.get('/works', function (req, res) {
  //res.send('Hello World!')
  res.render('works', { title: 'Hey', message: 'Hello there!' })
});

router.post('/api/user', function (req, res) {
  // console.log(req.body);
  res.send({status: 200, msg: newData})
});

module.exports = router;
