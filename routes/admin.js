const express = require('express');
const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');

router.get('/add-products', (req, res, next) => {

    res.sendFile(path.join(rootDirectory, 'views', 'iDs.html'));

});

router.post('/add-products', (req, res, next) => {
    console.log(req.body);
    
    res.redirect('/ids');
});

module.exports = router;