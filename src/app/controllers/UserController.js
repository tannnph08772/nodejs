const { response } = require('express');
const User = require('../models/User');
const { mongooseToObject } = require('../util/mongoose');

class UserController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('editCourse', {
                course: mongooseToObject(course)
            }))
            .catch(next);

    }

    // PUT /Course/id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin'))
            .catch(next);
    }
}
module.exports = new UserController();