const router = require("express").Router();
const { buildResponse } = require("../helper/buildResponse");

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} = require("../service/user.service");

router.get("/", async (req, res) => {
    try {
        buildResponse(res, 200, await getAllUsers());
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

router.get("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const data = await getUser(email);

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const userData = req.body;
        const data = await createUser(userData);

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const data = await updateUser(id, userData);

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

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
