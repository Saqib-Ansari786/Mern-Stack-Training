const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/about", function (req, res) {
  res.send(
    "<h1>I am studying bscs in comsats university islamabad lahore campus</h1>"
  );
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  let age = Number(req.body.age);
  age = age + 1;
  res.send("Thanks for sharing" + age);
});

app.listen(3000, function () {
  console.log("Server succussfuly started on port 3000");
});
