const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    title: { type: String, maxLength: 255 },
    desc: { type: String, maxLength: 655 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: ["title"], unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);