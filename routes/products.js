const  express = require('express');
const router = express.Router();
const productController = require('../controller/product_controller');

router.get('/', productController.products);
router.post('/create', productController.create);
router.delete('/:id', productController.delete);
router.post('/:id/update_quantity', productController.modify);

module.exports = router;