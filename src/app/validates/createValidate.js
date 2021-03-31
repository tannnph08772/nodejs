const { check, validationResult } = require('express-validator');

exports.UvalidationResult = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        const error = result.array()[0].msg;
        return res.status(422).json({ success: false, error: error })
    }
    next();
}

exports.craeteValidate = [
    check('title').trim().not().isEmpty().withMessage('Title is empty'),
    check('desc').trim().not().isEmpty().withMessage('Desc is empty'),
    check('image').trim().not().isEmpty().withMessage('Image is empty'),
]