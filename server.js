const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const dashboard = require("./routes/api/dashboard.js");

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

// Database Connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.json("Hello!");
});

app.use("/api/dashboard/", dashboard);

app.listen(process.env.PORT || 8080);