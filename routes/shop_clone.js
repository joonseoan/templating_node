const express = require('express');
const router = express.Router();
const path = require('path');

const { products } = require('./admin_clone');

const rootDirectory = require('../utils/path');

router.get('/', (req, res, next) => {

    console.log('products: ', products);
    
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));

});

module.exports = router;