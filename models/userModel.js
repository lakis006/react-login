const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true, minlength: 5},
    email: {type: String, require: true},
    displayName: {type: String},
})

module.exports = User = mongoose.model("user", userSchema); //be used to find, save, replace in the database 