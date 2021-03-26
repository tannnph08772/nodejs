class NewsController {
    index(req, res) {
        res.render('news');
    }
    // GET truyền vào trang chi tiết của trang news(/news/:slug)
    show(req, res) {
        res.send('Tân đẹp trai');
    }
}
module.exports = new NewsController();
