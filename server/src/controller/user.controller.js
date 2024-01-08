const router = require("express").Router();
const { buildResponse } = require("../helper/buildResponse");

const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../service/user.service");

router.get("/", async (req, res) => {
    try {
        const data = await getAllUsers();

        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);

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

module.exports = router;
