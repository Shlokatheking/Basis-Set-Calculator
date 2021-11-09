const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("trial.ejs");
});

app.get("/result.ejs", (req, res) => {
    res.render("result.ejs");
});

server.listen(process.env.PORT||3000, () => {
    console.log("Server running at port 3000");
});