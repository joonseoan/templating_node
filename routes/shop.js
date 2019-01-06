const express = require('express');
const router = express.Router();
const path = require('path');

const rootDirectory = require('../utils/path');

router.get('/', (req, res, next) => {
    
    res.sendFile(path.join(rootDirectory, 'views', 'shopid.html'));

});

module.exports = router;