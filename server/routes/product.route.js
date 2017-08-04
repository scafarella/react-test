module.exports = function(app){

    const productController = require('../controllers/product.controller');

    app.get('/api/products', productController.all);
}
