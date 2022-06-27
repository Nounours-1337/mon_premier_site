require("dotenv").config();

const express = require("express");
// const session = require("express-session");
const app = express();
const router = require("./app/router.js");

app.locals.title;
const gamesJson   = require("./data/games.json");
app.locals.gamesList = gamesJson;


app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./public"));

// app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res) => {
    res.status(404).render("404.ejs");
});

// const port = process.env.PORT || 3000;
const port = 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});