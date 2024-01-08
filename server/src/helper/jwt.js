const jwt = require("jsonwebtoken");
const { jwtDecode } = require("jwt-decode");

function createAccessToken(payload) {
    return jwt.sign(payload, process.env.PRIVATE_KEY);
}

function decodeToken(token) {
    return jwtDecode(token);
}

module.exports = { createAccessToken, decodeToken };
