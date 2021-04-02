const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mongooseToObject } = require('../util/mongoose');


const regist = (req, res, next) => {
    res.json(1111111111);
}
const register = async(req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password,
    });
    user.password = await bcrypt.hash(req.body.password, 10);
    user.save()
        .then(user => {
            res.json({
                message: 'add user successfully'
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
}

const login = (req, res, next) => {
    var password = req.body.password;

    User.findOne({ email: req.body.email })
        .then(user => {
            // console.log(password, user.password);
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'AzQ,PI)0(', { expiresIn: "1h" });
                        res.json({
                            massage: "Login Successfully!",
                            token
                        })
                    } else {
                        res.json({
                            massage: 'Password does not matched'
                        })
                    }

                })
            } else {
                res.json({
                    massage: 'Not user found'
                })
            }
        })
}

const logout = (req, res, next) => {
    req.logout();
    return res.redirect("/");
}

module.exports = { register, regist, login, logout }