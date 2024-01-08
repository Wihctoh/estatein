const { user } = require("../db");

async function getUserByEmailDB(email) {
    return await user.findOne({ email });
}

module.exports = { getUserByEmailDB };
