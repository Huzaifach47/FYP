var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs"); //for approach EJS file
app.use("/assets", express.static("assets")); //for approach style.css
app.use("/images", express.static("images")); //for approach style.css

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", function (req, res) {
  res.render("index", { menu: req.query });
});
//for midleware bodyparser
app.post("/", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render("index-success", { menu: req.body });
});

// app.get("/about", function (req, res) {
//   res.render("about");
// });
// app.get("/profile/:name", function (req, res) {
//   var data = {
//     age: 20,
//     job: "Ninja",
//     hobbies: ["running", "batting", "gymnast"],
//   };
//   res.render("profile", { person: req.params.name, dataa: data });
// });

app.listen(3005);
