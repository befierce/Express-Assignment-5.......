const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (req, res, next) => {
    // Corrected path to the HTML file
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
router.get('/contactus', (req, res, next) => {
    // Corrected path to the HTML file
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
});
router.post('/success', (req, res, next) => {
    // Corrected path to the HTML file
    res.sendFile(path.join(__dirname,'../','views','success.html'));
});

module.exports = router;
