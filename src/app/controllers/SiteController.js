const Course = require('../models/Course');
const { changeArrToObject } = require('../util/mongoose')

class SiteController {
    home(req, res, next) {
        // Course.find({}, function(err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).join({ error: 'ERROR!!!!' });
        //     }
        // }); đây là cách dùng callback để lấy dữ liệu và check

        // sử dụng promise ta cần truyền thêm một đối số nữa là next
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: changeArrToObject(courses)
                });
            }) // truyền courses vào để get dữ liệu đổ ra trang home :{courses:courses}
            .catch(next); // Vì coure trả lại giá trị giống nhau nên ta chỉ cần truyền 1 biến courses
    }

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();