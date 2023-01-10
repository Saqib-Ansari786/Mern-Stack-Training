var http = require("http");

http
  .createServer(function (req, res) {
    res.write("hello world hy i m saqib");

    res.end();
  })
  .listen(8080, function () {
    console.log("server succusfully started!");
  });
