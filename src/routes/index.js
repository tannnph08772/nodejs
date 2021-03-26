const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const adminRouter = require('./admin');

function route(app) {
    app.use('/admin', adminRouter);
    app.use('/news', newRouter);
    app.use('/course', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;