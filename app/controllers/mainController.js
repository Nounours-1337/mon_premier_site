const gamesJson   = require("../../data/games.json");

const mainController = {
  renderHomePage(req, res) {
    res.locals.title = "Accueil";
    res.locals.pageTitle = "mon site";
  
    res.render("index")
  },

  renderGameHomePage(req, res) {
    res.locals.title = "Jeux";
    res.locals.pageTitle = "Choisissez un jeux";

    res.render("Accueil_des_jeux.ejs");
  },

  renderConstructionPage(req, res) {
    res.locals.title = "Jeux";
    res.locals.pageTitle = "en construction";

    res.render("construction.ejs");
  },

  renderGamePage(req, res, next) {
    const urlGameName = req.params.games;
    const currentGame = gamesJson.find((gameObject) => gameObject.name === urlGameName);
    
    if (! currentGame) {
      return next();
    }
    else {
      res.locals.title = "Mon jeu";
      res.locals.pageTitle = currentGame.title;
      res.render("games.ejs", { game: currentGame });
    }
    return mainController.renderConstructionPage;
  },

  renderCVPage(req, res) {
    res.locals.title = "CV";
    res.locals.pageTitle = "évolutif";

    res.render("CV.ejs");
  }
}

module.exports = mainController;