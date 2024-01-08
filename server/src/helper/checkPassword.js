const bcrypt = require("bcrypt");

async function checkPassword(userPassword, dbPassword) {
    const checkPassword = await bcrypt.compare(userPassword, dbPassword);
    if (!checkPassword) throw new Error("incorrect password");

    return checkPassword;
}

module.exports = checkPassword;
