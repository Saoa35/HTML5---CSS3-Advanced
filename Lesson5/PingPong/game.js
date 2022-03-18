window.addEventListener("load", startGame);
let centerX = 250,
    centerY = 200,
    radius = 15,
    ballColor = '#368d21'
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
        } else {
            document.getElementById("span").innerHTML = score;
            let canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");

            context.clearRect(0, 0, canvas.width, canvas.height);

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI*2, true);
            context.stroke();
            context.fillStyle = ballColor;
            context.fill();

            if (centerX + radius === gameWidth || centerX - radius ===0) {
                dx = -dx;
                score++;
            }

            if (centerY - radius < 0) {
                dy = -dy;
                score++;
            }

            centerX = centerX + dx;
            centerY = centerY + dy;

            context.fillStyle = "blue";
            context.fillRect(racketLeft, racketTop, racketWidth, racketHeight);

            checkCollision();
            function checkCollision() {
                if ((centerY + radius == racketTop) && (centerX >= racketLeft) &&(centerX < (racketLeft + racketWidth))) {
                    dy = -dy;
                }
            }
            
        }
    }