const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb://localhost:27017/wikiDB";
mongoose.connect(url);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//------------------------------------mongoose DB code------------------------
const articleSchema = {
  title: String,
  content: String,
};

const Articles = mongoose.model("Article", articleSchema);

//-----------------Express Routes----------------------------------------

app
  .route("/articles")
  .get(function (req, res) {
    Articles.find(function (err, result) {
      if (!err) {
        res.status(200).json(result);
      } else res.status(500).json("Cannot fetch documents");
    });
  })
  .post(function (req, res) {
    const title = req.body.title;
    const content = req.body.content;

    const article = new Articles({
      title: title,
      content: content,
    });

    article.save(function (err) {
      if (!err) {
        res.redirect("/articles");
      } else console.log(err);
    });
  })
  .delete(function (req, res) {
    Articles.deleteMany(function (err) {
      if (!err) {
        res.json("delete all the documents");
      } else res.json("can't delete document" + err);
    });
  });

app
  .route("/articles/:name")
  .get(function (req, res) {
    Articles.findOne({ title: req.params.name }, function (err, foundArticle) {
      if (foundArticle) {
        res.send(foundArticle);
      } else res.send("No article found!");
    });
  })
  .put(function (req, res) {
    Articles.updateOne(
      { title: req.params.name },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) res.send("Successfully updated the document");
        else res.send("failed to update!");
      }
    );
  })
  .patch(function (req, res) {
    Articles.updateOne(
      { title: req.params.name },
      { $set: req.body },
      function (err) {
        if (!err)
          res.send("successfully updated the selected doument using patch");
        else res.send("failed to update the selected doument using patch");
      }
    );
  })
  .delete(function (req, res) {
    Articles.deleteOne({ title: req.params.name }, function (err) {
      if (!err) res.json("successfully deleted the selected document");
      else res.json(err);
    });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
