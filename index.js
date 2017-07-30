require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('dist'))
app.use(express.static('css'))

app.get('/', function (req, res) {
   res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/api/products', (req,res) => {
  fetch('http://www.matchesfashion.com/nms/ajax/p/1095470,1095483,1095472,1095467')
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(err => {
    res.json({code: 'GENERIC_ERROR', error:'Generic Error'})
    console.error(err)
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
