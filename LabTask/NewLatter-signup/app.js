const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("publicFolder"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  res.sendFile(__dirname + "/success.html");
});

app.listen(3000, function () {
  console.log("server started on port 3000 successfully");
});
