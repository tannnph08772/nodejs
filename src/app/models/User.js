const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongooseDelete = require('mongoose-delete');

const User = new Schema({
    name: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 200 },
    phone: { type: String, maxLength: 10 },
    password: { type: String, maxLength: 300, minLength: 6 },
    address: { type: String, maxLength: 200, minLength: 6 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// add plugin 
User.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('User', User);