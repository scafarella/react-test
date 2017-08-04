module.exports = function(app){

    const homeController = require('../controllers/home.controller');

    app.get('/', homeController.home);
}
