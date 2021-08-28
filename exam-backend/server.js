const express = require("express");
const routes = require("./startup/routes.js");

//express instance
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
require("./startup/routes")(app);

// DB connection
require("./startup/db")();

//Port listen
app.listen(port, () => console.log(`Exam Tool Started! ${port}`));
