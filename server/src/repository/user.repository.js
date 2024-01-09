const { user, ObjectId } = require("../db");

async function getAllUsersDB() {
    return await user.find();
}

async function getUserDB(email) {
    return await user.findOne({ email });
}

async function createUserDB(userData) {
    return await user.create(userData);
}

async function updateUserDB(id, userData) {
    return await user.updateOne({ _id: new ObjectId(id) }, { $set: userData });
}

async function deleteUserDB(id) {
    return await user.deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllUsersDB, getUserDB, createUserDB, updateUserDB, deleteUserDB };
