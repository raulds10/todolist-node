const express = require("express");
const path = require("path");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
//const dotenv = require("dotenv");
//const mongoose = require('mongoose');

//dotenv.config({path: "./config.env"});
//const PORT = process.env.PORT || 3000
//const DB = process.env.MONGODB_URL;  

//mongoose
//  .connect(DB, {
//    usenewurlparser: true,
//    useCreateIndex: true,
//    useunifiedtopology: true,
//  })
//  .then(() => {
//    console.log("Successfully connected ");
//  })
//  .catch((error) => {
//    console.log(`can not connect to database, ${error}`);
//  });

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is up on port " + port);
});
