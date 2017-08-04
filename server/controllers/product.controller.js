const product = require('../apis/product')

const productController = {

  all(req,res){
      product.all()
      .then(data => res.json(data))
      .catch(err => {
        res.json({code: 'GENERIC_ERROR', error:'Generic Error'})
        console.error(err)
      })
  }
}

module.exports = productController
