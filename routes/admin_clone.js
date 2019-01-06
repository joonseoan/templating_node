const express = require('express');

const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');

const products = [];

router.get('/add-products', (req, res, next) => {
    
    res.sendFile(path.join(rootDirectory, 'views', 'add-products.html'));

});

router.post('/add-products', (req, res, next) => {
    
    const { title } = req.body;
    console.log(req.body.title);
    products.push({ title });
    res.redirect('/');
    
});


// 'products is assigned in global module.'
//      Therefore it momorize in global state.
//      The, refresh the browser, it still remember value until the server is downs
module.exports = { router, products };
