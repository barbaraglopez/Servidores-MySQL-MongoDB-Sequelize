const mongoose = require("mongoose");
const schema = mongoose.Schema;

const rolesSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
});

const rolesModel = mongoose.model("roles", rolesSchema);

module.exports = rolesModel;
