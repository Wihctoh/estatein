const bcrypt = require("bcrypt");

const { getUserById } = require("./user.service");
const { createAccessToken } = require("../helper/jwt");

async function loginUser(id, email, password) {
    const findUser = await getUserById(id);
    const checkPassword = await bcrypt.compare(password, findUser.password);
    if (!checkPassword) throw new Error("incorrect password");

    const accessToken = createAccessToken({ id, email });

    return { accessToken };
}

module.exports = { loginUser };
