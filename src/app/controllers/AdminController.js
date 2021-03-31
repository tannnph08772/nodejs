const { deleteOne } = require('../models/Course');
const Course = require('../models/Course');
const { changeArrToObject } = require('../util/mongoose')

class adminController {
    dashboard(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([courses, deleteCount]) => {
                res.render('admin', {
                    deleteCount: deleteCount,
                    courses: changeArrToObject(courses)
                });
            }) // truyền courses vào để get dữ liệu đổ ra trang home :{courses:courses}
            .catch(next); // Vì coure trả lại giá trị giống nhau nên ta chỉ cần truyền 1 biến courses
    }

    trash(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('trash', {
                    courses: changeArrToObject(courses)
                });
            })
            .catch(next);
    }
}
module.exports = new adminController();