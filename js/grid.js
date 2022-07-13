// GRID FUNCTIONS

// Global Constants
const NUM_ROWS = 15;
const NUM_COLS = 15;

// Create array to represent a grid
let grid = createGridArray();

// Create divs to model the grid array
createDivGrid(grid);


function createGridArray() {
    // Create and return a grid array
    return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
];
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2d array
            let divEl = document.createElement("div");

            // Add an id to each divEl
            divEl.id = "cell" + row  +  "-" + col;

            // Add appropriate class to each div element
            if (grid[row][col] === 1) {
                divEl.classList.add("player");
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col; ;

            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

// Key Event Listeners - player movement
document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
    if (e.keyCode === 39) { // Right arrow key
        player.direction = "right";
    } else if (e.keyCode === 37) { // Left arrow key
        player.direction = "left";
    } else if (e.keyCode === 38) { // up arrow key
        player.direction = "up";
    } else if (e.keyCode === 40) { // Down arrow key
        player.direction = "down";
    }
}

function movePlayer() {
    if (player.direction === "left") {
        if (player.col - 1 >= 0) {
            updatePlayer(player.row, player.col - 1);
        } else {
            gameOver();
        }
    } else if (player.direction === "right") {
        if (player.col + 1 < 6) {
            updatePlayer(player.row, player.col + 1);
        } else {
            gameOver();
        }
    } else if (player.direction === "up") {
        if (player.row - 1 >= 0) {
            updatePlayer(player.row - 1, player.col);
        } else {
            gameOver();
        }
    } else if (player.direction === "down") {
        if (player.row + 1 < 6) {
            updatePlayer(player.row + 1, player.col);
        } else {
            gameOver();
        }
    }
}

function updatePlayer(newRow, newCol) {
    function checkCollisions() {
        return grid[newRow][newCol] !== 1 && grid[newRow][newCol] !== 2;
    }

    if (checkCollisions) {
        // Remove player class from current location
        let cellId = "cell" + player.row + "-" + player.col;
        document.getElementById(cellId).classList.remove("player");

        // Set grid array to 0 for current location
        grid[player.row][player.col] = 0;

        // Update player location
        player.row = newRow;
        player.col = newCol;

        // Update class and grid
        cellId = "cell" + player.row + "-" + player.col;
        document.getElementById(cellId).classList.add("player");

        grid[player.row][player.col] = 1;
    }
}

function gameOver() {
    player.direction = "";
    player.row = 7;
    player.col = 7;
    console.log("Game Over");
}
