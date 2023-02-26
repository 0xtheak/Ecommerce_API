const  express = require('express');
const router = express.Router();
const productController = require('../controller/product_controller');

// return all the products
router.get('/', productController.products);
// storing product api
router.post('/create', productController.create);
// remove product with respective id from the database
router.delete('/:id', productController.delete);
// update product qunatity
router.post('/:id/update_quantity', productController.modify);

module.exports = router;