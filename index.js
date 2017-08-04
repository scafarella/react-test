require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', './server/views')
app.use(express.static('dist'))
app.use(express.static('css'))

require('./server/routes')(app);

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
