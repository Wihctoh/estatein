const jwt = require("jsonwebtoken");

function createAccessToken(payload) {
    return jwt.sign(payload, process.env.PRIVATE_KEY);
}

module.exports = { createAccessToken };
