const path = require('path');

exports.contactus = (req, res, next) => {
    // Corrected path to the HTML file
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
}
exports.success = (req, res, next) => {
    // Corrected path to the HTML file
    res.sendFile(path.join(__dirname,'../','views','success.html'));
}