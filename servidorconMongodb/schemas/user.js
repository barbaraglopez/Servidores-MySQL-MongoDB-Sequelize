const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    id:String,
    name:String,
    lastName:String
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
