const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; //because of bearer
        // const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = /*decoded */ token;
        console.log(req.userData);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};