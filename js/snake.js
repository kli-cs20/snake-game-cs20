// Snake Game

// HTML Elements
let resultEl = document.getElementById("results");
let scoreEl = document.getElementById("score");

let player = [];
let apples = [];
drawPlayer();
createApples();
    
// Global Variables
let direction = "left";
let score = 0;
let game = "start";

// Create divs to model the grid array
createDivGrid(grid);

setInterval(draw, 250);

function draw() {
    if (game === "start") {
        resultEl.innerHTML = "";
        document.addEventListener("click", startGame);
        score = 0;
    } else if (game === "play") {
        clearBoard(grid);
        drawApples();
        movePlayer();
        checkCollisions();
        updateGrid();
    } else if (game == "over") {
        scoreEl.innerHTML = score;
    }
}







