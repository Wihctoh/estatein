const bcrypt = require("bcrypt");

const {
    getAllUsersDB,
    getUserByIdDB,
    createUserDB,
    updateUserDB,
    deleteUserDB,
} = require("../repository/user.repository");

async function getAllUsers() {
    const data = await getAllUsersDB();
    if (data.length === 0) throw new Error("no have users");

    return data;
}

async function getUserById(id) {
    const data = await getUserByIdDB(id);
    if (data === null) throw new Error("no have user");

    return data;
}

async function createUser(userData) {
    if (userData.password.length < 8) throw new Error("password must be more then 8 letters");

    const hashPassword = await bcrypt.hash(userData.password, 1);
    const data = await createUserDB({ ...userData, password: hashPassword });

    return data;
}

async function updateUser(id, userData) {
    const data = await updateUserDB(id, userData);

    return data;
}

async function deleteUser(id) {
    const data = await deleteUserDB(id);
    if (data.deletedCount === 0) throw new Error("user not deleted");

    return data;
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
