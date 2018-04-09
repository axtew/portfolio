const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', './src/templates/pages/');
app.set('view engine', 'pug');
app.use(express.static('./build/'));

app.use('/', routes);

app.get('*', (req, res) => {
  res.render('error', { title: '404, not found'})
})

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
  console.log('http://localhost:3002/');
})
