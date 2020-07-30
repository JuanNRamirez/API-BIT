const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    document: Number,
    age: Number
});

module.exports = mongoose.model('Student', StudentSchema);