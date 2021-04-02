const { response } = require('express');
const Cart = require('../models/Cart');
const Course = require("../models/Course");

const shopping = (req, res, next) => {
    var courseId = req.params._id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Course.findById(courseId, function(err, course) {
        if (err) {
            return res.json(111);
        }
        cart.add(course, course.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    })
}
module.exports = { shopping };