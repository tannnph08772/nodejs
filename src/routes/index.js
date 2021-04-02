const newRouter = require('./news');
const authRouter = require('./auth');
const siteRouter = require('./site');
const courseRouter = require('./course');
const adminRouter = require('./admin');

// const userRouter = require('./user');

function route(app) {
    app.use('/auth', authRouter);
    // app.use('/api/user', userRouter);
    app.use('/admin', adminRouter);
    app.use('/news', newRouter);
    app.use('/course', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;