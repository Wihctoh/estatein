const express = require("express");
const cors = require("cors");

const app = express();

const userRouter = require("./controller/user.controller");

app.use(cors());
app.use(express.json());
app.use((error, req, res, next) => res.send(error.message));

app.use("/user", userRouter);

module.exports = app;
