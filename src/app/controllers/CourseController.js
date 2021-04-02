const { response } = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../util/mongoose');
const path = require('path');
const { check, validationResult } = require('express-validator');
const { index } = require('./NewsController');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render("create");
    }

    store(req, res, next) {
            const course = new Course({
                title: req.body.title,
                desc: req.body.desc
            });
            if (req.files) {
                let path = ''
                req.files.forEach(function(files, index, arr) {
                    path = path + files.path + ','
                });
                path = path.substring(0, path.lastIndexOf(","))
                course.image = path
            }

            course.save()
                .then(() => res.redirect("/"))
                .catch(next)
        }
        // GET /course/:id/edit
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

    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    deleteFake(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/admin'))
            .catch(next);
    }

    handleActionForm(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Action is invalid' })
                break;
        }
    }
}
module.exports = new CourseController();