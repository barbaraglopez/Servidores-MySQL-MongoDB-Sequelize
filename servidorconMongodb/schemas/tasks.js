const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tasksSchema = new mongoose.Schema({
    id:String,
    name: String,
    description: String,
});

const tasksModel = mongoose.model("tasks", tasksSchema);

module.exports = tasksModel;
