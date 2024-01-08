const router = require("express").Router();
const { buildResponse } = require("../helper/buildResponse");

const { loginUser } = require("../service/auth.service");

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email, password);

        res.cookie("accessToken", token, { httpOnly: false, secure: true });
        buildResponse(res, 200, token);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = router;
