const { Router } = require("express");
const mainController = require("./controllers/mainController");

const router = Router();

router.get("/", mainController.renderHomePage);

router.get("/jeux",mainController.renderGameHomePage);
router.get("/jeux/:games", mainController.renderGamePage);

router.get("/CV", mainController.renderCVPage);

module.exports = router;