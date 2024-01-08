const checkPassword = require("../helper/checkPassword");
const { createAccessToken } = require("../helper/jwt");
const { getUserByEmailDB } = require("../repository/auth.repository");

async function loginUser(email, password) {
    const findUser = await getUserByEmailDB(email);
    await checkPassword(password, findUser.password);

    const accessToken = createAccessToken({ email });

    return { accessToken };
}

module.exports = { loginUser };
