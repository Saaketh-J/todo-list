const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {type: String, required: true}
});

module.exports = mongoose.model('Todos', postSchema);