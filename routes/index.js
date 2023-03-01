const  express = require('express');
const router = express.Router();

// products routes
router.use('/products', require('./products'));

module.exports =  router;