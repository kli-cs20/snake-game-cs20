// GRID FUNCTIONS

// Global Constants
const NUM_ROWS = 15;
const NUM_COLS = 15;

// Create array to represent a grid
let grid = createGridArray();



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
        direction = "right";
    } else if (e.keyCode === 37) { // Left arrow key
        direction = "left";
    } else if (e.keyCode === 38) { // up arrow key
        direction = "up";
    } else if (e.keyCode === 40) { // Down arrow key
        direction = "down";
    }
}

function movePlayer() {
    if (direction === "left") {
        updatePlayer(player.row, player.col - 1);
    } else if (direction === "right") {
        updatePlayer(player.row, player.col + 1);
    } else if (direction === "up") {
        updatePlayer(player.row - 1, player.col);
    } else if (direction === "down") {
        updatePlayer(player.row + 1, player.col);
    }
}

function updatePlayer(newRow, newCol) {

    for (let i = player.length - 2; i >= 0; i--) {
        // Start at second to last element, go backwards from there
        // The second last element will become the element before it
        player[i + 1] = player[i];
    }

    removeBlock(player[player.length - 1]);

    function checkCollisions() {
        return grid[newRow][newCol] !== 1 && grid[newRow][newCol] !== 2;
    }

    if (checkCollisions) {
        // Update player location
        player[0].row = newRow;
        player[0].col = newCol;

        for (let i = 0; i < player.length; i++) {
            grid[player[i].row][player[i].col] = 1;
        }
    }
}

function removeBlock(block) {
    // Set grid array to 0 for current location
    grid[block.row][block.col] = 0;
}

function gameOver() {
    direction = "up";
    player.row = 7;
    player.col = 7;
    console.log("Game Over");
}

function updateGrid() {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            if (grid[row][col] === 0) {
                // Update class and grid
                let cellId = "cell" + player.row + "-" + player.col;
                document.getElementById(cellId).classList.remove();
            } else if (grid[row][col] === 01) {
                // Update class and grid
                let cellId = "cell" + player.row + "-" + player.col;
                document.getElementById(cellId).classList.add("player");
            }
        }
    }
}