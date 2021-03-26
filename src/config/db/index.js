// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
//import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_demo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect Thành công');
    } catch (error) {
        console.log('connect thất bại');
    }
}
module.exports = { connect };