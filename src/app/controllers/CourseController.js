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
}
module.exports = new CourseController();