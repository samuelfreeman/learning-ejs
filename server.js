const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const layouts = require("express-ejs-layouts");
app.use(layouts);
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index", {
    bulk: [
      { list: "Check your diet" },
      { list: "Pay attention to detail" },
      { list: " Read alot of books" },
    ],
  });
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.use(cors({ origin: true, credentials: true }));

app.listen(8000);
