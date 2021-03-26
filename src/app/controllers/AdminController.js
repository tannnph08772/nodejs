const Course = require('../models/Course');
const { changeArrToObject } = require('../util/mongoose')

class adminController {
    dashboard(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('admin', {
                    courses: changeArrToObject(courses)
                });
            }) // truyền courses vào để get dữ liệu đổ ra trang home :{courses:courses}
            .catch(next); // Vì coure trả lại giá trị giống nhau nên ta chỉ cần truyền 1 biến courses
    }
}
module.exports = new adminController();