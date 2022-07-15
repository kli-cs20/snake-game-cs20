// Snake Game

// HTML Elements
let resultEl = document.getElementById("results");
let scoreEl = document.getElementById("score");
let highScoreEl = document.getElementById("high-score");

// Modal Stuff
let modalEl = document.getElementById("modal");
let showModalEl = document.getElementById('show-modal');
let hideModalEl = document.getElementById("hide-modal");

showModalEl.addEventListener("click", showModal);
hideModalEl.addEventListener("click", hideModal)

function showModal() {
    modalEl.style.display = "block";
}
function hideModal() {
    modalEl.style.display = "none";
}
//////////////



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

// Create divs to model the grid array
createDivGrid(grid);

setInterval(draw, 150);

function draw() {
    if (game === "start") {
        resultEl.innerHTML = "";
        document.addEventListener("click", startGame);
        score = 0;
    } else if (game === "play") {
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







