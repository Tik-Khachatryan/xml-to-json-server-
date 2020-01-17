const mongoose = require("../database");
const schema = {
    xml: {type: Array}
};
const collectionName = "xml";
const userSchema = mongoose.Schema(schema);

const User = mongoose.model(collectionName, userSchema);


module.exports = User;