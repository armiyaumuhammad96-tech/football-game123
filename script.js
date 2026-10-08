let score = 0;
let playing = true;

function shoot(direction) {

    if (!playing) {
        return;
    }

    playing = false;

    const ball = document.getElementById("ball");
    const goalkeeper = document.getElementById("goalkeeper");
    const message = document.getElementById("message");

    // Move the ball
    if (direction === "left") {
        ball.style.left = "20%";
        ball.style.bottom = "270px";
    }

    if (direction === "center") {
        ball.style.left = "47%";
        ball.style.bottom = "270px";
    }

    if (direction === "right") {
        ball.style.left = "75%";
        ball.style.bottom = "270px";
    }

    // Random goalkeeper position
    const positions = ["left", "center", "right"];
    const goalkeeperMove =
        positions[Math.floor(Math.random() * positions.length)];

    if (goalkeeperMove === "left") {
        goalkeeper.style.left = "15%";
    }

    if (goalkeeperMove === "center") {
        goalkeeper.style.left = "45%";
    }

    if (goalkeeperMove === "right") {
        goalkeeper.style.left = "75%";
    }

    setTimeout(() => {

        if (direction !== goalkeeperMove) {

            score++;

            document.getElementById("score").textContent = score;

            message.textContent = "⚽ GOAL! Great shot! 🎉";

        } else {

            message.textContent = "🧤 SAVED! Try again!";

        }

        setTimeout(() => {

            ball.style.left = "47%";
            ball.style.bottom = "30px";

            goalkeeper.style.left = "45%";

            message.textContent = "Choose where to shoot!";

            playing = true;

        }, 1200);

    }, 700);
}


function restartGame() {

    score = 0;
    playing = true;

    document.getElementById("score").textContent = "0";

    document.getElementById("message").textContent =
        "Choose where to shoot!";

    document.getElementById("ball").style.left = "47%";
    document.getElementById("ball").style.bottom = "30px";

    document.getElementById("goalkeeper").style.left = "45%";
}