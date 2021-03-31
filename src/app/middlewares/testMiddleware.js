module.exports = function logger(req, res, next) {
    if (req.query.user === 'vip') {
        return next();
    } else {
        res.status(403).json('access deniel');
    }
    next();
}