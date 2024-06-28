const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
require("./config/dbConnection");

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});

const userRouter = require("./routes/user");
app.use("/worko/user", userRouter);


module.exports = app;
