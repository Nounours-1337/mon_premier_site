const express = require("express");
const gamesJson   = require("./games.json");

const app     = express();
const PORT    = 3000;

app.locals.title;
app.locals.gamesList = gamesJson;

app.set("view engine", "ejs");
app.set("views', './views");

app.use(express.static("./public"));


app.get("/", (req, res) => {
    res.locals.title = "Accueil";
    res.locals.pageTitle = "mon site";
    
    res.render("index.ejs")
});

app.get("/jeux", (req, res, next) => {
    res.locals.title = "Accueil des jeux";
    res.locals.pageTitle = "Choisissez un jeux";

    res.render("Accueil_des_jeux.ejs");
});

app.get("/jeux/:games", (req, res, next) => {
    const urlGameName = req.params.games;
    const currentGame = gamesJson.find((gameObject) => gameObject.name === urlGameName);
    
    if (!currentGame) {
        return next();
    }
    else {
        res.locals.title = "Mon jeu";
        res.locals.pageTitle = currentGame.title;
        res.render("games.ejs", { game: currentGame });
    }
});

app.get("/jeux/en_construction", (req, res, next) => {
    res.locals.title = "Jeux";
    res.locals.pageTitle = "en construction";

    res.render("construction.ejs");
});

app.get("/CV", (req, res, next) => {
    res.locals.title = "CV";
    res.locals.pageTitle = "évolutif";

    res.render("CV.ejs");
});

app.use((req, res) => {
    res.status(404).render("404.ejs");
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});