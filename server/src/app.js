const express = require("express");
const cors = require("cors");

const app = express();

const userRouter = require("./controller/user.controller");
const authUser = require("./controller/auth.controller");

app.use(cors());
app.use(express.json());
app.use((error, req, res, next) => res.send(error.message));

app.use("/user", userRouter);
app.use("/auth", authUser);

module.exports = app;
