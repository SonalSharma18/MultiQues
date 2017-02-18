var mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
    username : String,
    email : String,
    pwhash : String,
    type : String
});

module.exports = mongoose.model('Users', UsersSchema);
