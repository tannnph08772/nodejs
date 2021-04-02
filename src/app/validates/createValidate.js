const { body, validationResult } = require('express-validator')
const courseValidationRules = () => {
    return [
        // username must be an email
        body('title', 'khong dc de trong').not().isEmpty(),
        // password must be at least 5 chars long
        body('desc', 'khong dc de trong').isLength({ min: 5 }),
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next();
    } else {
        const extractedErrors = errors.array().map(abc => abc);
        return res.json(extractedErrors);
    }

}

module.exports = {
    courseValidationRules,
    validate,
}