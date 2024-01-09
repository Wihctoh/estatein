const bcrypt = require("bcrypt");

async function checkPassword(userPassword, dbPassword) {
    const checkPassword = await bcrypt.compare(userPassword, dbPassword);
    if (!checkPassword) throw new Error("incorrect password");

    return checkPassword;
}

async function hashPassword(userPassword, salt) {
    const hash = await bcrypt.hash(userPassword, salt);
    if (!hash) throw new Error("incorrect password");

    return hash;
}

module.exports = { checkPassword, hashPassword };
