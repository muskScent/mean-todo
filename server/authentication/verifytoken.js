const jwt = require('jsonwebtoken');

var verifyToken = function (req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        // Verifying the given token
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            req.userData = authData;
        });
        next();
    } else {
        // Forbidden
        //res.sendStatus(403);
        res.redirect('/login');
    }
}

module.exports = verifyToken;