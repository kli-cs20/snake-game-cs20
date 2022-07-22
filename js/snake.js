// Snake Game

// HTML Elements
let resultEl = document.getElementById("results");
let scoreEl = document.getElementById("score");
let highScoreEl = document.getElementById("high-score");

// Set up player and apple arrays
let player = [];
let apples = [];
drawPlayer();
createApples();
    
// Global Variables
let direction = "left";
let score = 0;
let highScore = 0;
let game = "start";
let segmentsGained = 3;

// Create divs to model the grid array
createDivGrid(grid);

setInterval(draw, 150);

function draw() {
    if (game === "start") {
        document.addEventListener("keydown", startGame);
        score = 0;
        direction = "left";
    } else if (game === "play") {
        resultEl.innerHTML = "";
        
        clearBoard(grid);

        drawApples();

        movePlayer();
        
        updateGrid();
        scoreEl.innerHTML = score;
    } else if (game == "over") {
        scoreEl.innerHTML = score;
        if (score > highScore) {
            highScore = score;
        }
        highScoreEl.innerHTML = highScore;
    }
}







