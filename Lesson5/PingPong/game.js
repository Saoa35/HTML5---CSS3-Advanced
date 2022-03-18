window.addEventListener("load", startGame);
let centerX = 250,
    centerY = 200,
    radius = 15,
    ballColor = 'red'
    dx = 5,
    dy = 5,
    score = 0;
    gameWidth = 300,
    gameHeight = 500,
    racketWidth = 100,
    racketHeight = 25,
    racketLeft = 100,
    racketTop = 475,
    animation;

    function startGame() {
        animation = setInterval(newGame, 30);
    }

    function newGame() {
        if (centerY - radius > gameHeight) {
            document.getElementById("score").innerHTML = "<p>Game over! Your score is:" + score;
            document.getElementById("score").style.border = "2px solid red";
            clearInterval(animation);
        }
    }