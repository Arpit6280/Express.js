const express = require("express");

const bodyParser = require("body-parser");

const loginRouter = require("./routes/login");
const homeRouter = require("./routes/home");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRouter);

app.use(homeRouter);

app.listen(3000);
