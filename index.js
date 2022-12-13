const express = require("express");
const mongo = require("./connect");
const bookingRoomRouter = require("./routers/bookingRoomRouter");
const dotenv = require("dotenv");

dotenv.config();
mongo.connect();

const app = express();

app.use(express.json());

app.use("/", bookingRoomRouter);

app.listen(process.env.PORT);