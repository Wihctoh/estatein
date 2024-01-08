const router = require("express").Router();
const { buildResponse } = require("../helper/buildResponse");

const { loginUser } = require("../service/auth.service");

router.post("/login", async (req, res) => {
    try {
        const { id, email, password } = req.body;
        const data = await loginUser(id, email, password);

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = router;
