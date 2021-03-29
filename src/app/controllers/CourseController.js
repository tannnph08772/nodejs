const { response } = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../util/mongoose')

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
            const course = new Course(req.body);
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
}
module.exports = new CourseController();