const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const q = req.body.cityName;
  const unit = req.body.units;
  const appid = "d6250e5cf8c8144ae1ba20a80946c5bc";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    q +
    "&appid=" +
    appid +
    "&units=" +
    unit;

  https.get(url, function (response) {
    console.log(response.statusCode, response.statusMessage);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const description = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const cityName = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(description);
      console.log(temp);

      res.write(
        "<h1> Temprature in " +
          cityName +
          " is " +
          temp +
          " degree and its description is " +
          description +
          "</h1>"
      );
      res.write("<img src=" + imageURL + " >");

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
