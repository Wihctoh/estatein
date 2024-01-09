const { checkPassword, hashPassword } = require("../helper/passwordHelper");
const { createAccessToken } = require("../helper/jwt");
const {
    getAllUsersDB,
    getUserDB,
    createUserDB,
    updateUserDB,
    deleteUserDB,
} = require("../repository/user.repository");

async function getAllUsers() {
    const data = await getAllUsersDB();
    if (!data.length) throw new Error("no have users");

    return data;
}

async function getUser(email) {
    return await getUserDB(email);
}

async function createUser(userData) {
    const findUser = await getUser(userData.email);

    if (findUser) throw new Error("user already exist");
    if (userData.password.length < 8) throw new Error("password must be more then 8 letters");

    const data = await createUserDB({
        ...userData,
        password: await hashPassword(userData.password, 1),
    });

    return data;
}

async function updateUser(id, userData) {
    return await updateUserDB(id, userData);
}

async function deleteUser(id) {
    const data = await deleteUserDB(id);
    if (!data.deletedCount) throw new Error("user can't deleted");

    return data;
}

async function loginUser(email, password) {
    const findUser = await getUser(email);
    if (!findUser) throw new Error("no have user");

    await checkPassword(password, findUser.password);

    return {
        accessToken: createAccessToken(JSON.stringify({ email, id: { ...findUser._doc }._id })),
    };
}

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser, loginUser };
