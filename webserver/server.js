"use strict"

//Imports
const express = require("express");
const hbs = require("express-handlebars");
const routes = require("./routes.js");

const app = express();
const address = process.env.IP || "localhost"
const port = process.env.PORT || "8000"

//Set up the express framework
app.engine(".hbs", hbs({
    extname: ".hbs",
    defaultLayout: "main"
}));
app.set("views", "./views")
app.set("view engine", ".hbs");
app.use("/", routes);
app.listen(port, address);

console.log(`http://${address}:${port}/index`)