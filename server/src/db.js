const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/greenshop");

const tableUser = mongoose.model("user", {
    name: String,
    surname: String,
    email: String,
    phone: String,
    password: String,
});

module.exports = {
    user: tableUser,
    ObjectId: mongoose.Types.ObjectId,
};
