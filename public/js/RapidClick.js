const game = {
    jeu: document.getElementById("jeu"),
    forme: [
        bloc     = document.getElementById("bloc"),
        rond     = document.getElementById("rond"),
        triangle = document.getElementById("triangle"),
        black    = document.getElementById("black"),
    ],
    formSize     : 50,
    bordureMin   : 0,
    bordureMax   : 700,
    score        : 0,
    timer        : 3000,

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    startGame() {
        const form   = game.forme[game.randomNumber(0, game.forme.length - 1)];
        const styles = form.style;
        const max    = game.bordureMax - game.formSize;
        game.timeOut = setTimeout(game.endTurn, game.timer);

        if (form === game.forme[2]) {
            styles.borderTopWidth    = (game.formSize / 2)       + "px";
            styles.borderRightWidth  = 0                         + "px";
            styles.borderBottomWidth = (game.formSize / 2)       + "px";
            styles.borderLeftWidth   = game.formSize             + "px";
        }
        else {
            styles.width             = game.formSize             + "px";
            styles.height            = game.formSize             + "px";
        }
        styles.left                  = game.randomNumber(0, max) + "px";
        styles.top                   = game.randomNumber(0, max) + "px";
        styles.visibility            =                        "visible";
    },

    clicked(event) {
        if (event.target.id !== "jeu") {
            game.score++;
            game.endTurn();
        }
    },

    clear() {
        for (let i = 0; i < game.forme.length; i++) {
            game.forme[i].style.visibility = "hidden";
        }
    },

    endTurn() {
        clearTimeout(game.timeOut);
        game.clear();
        game.startGame();
    },

    init() {
        game.jeu.addEventListener("click", game.clicked);
        game.startGame();
    }
};


document.addEventListener("DOMContentLoaded", game.init);