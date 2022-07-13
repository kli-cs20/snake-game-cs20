// GRID DESIGNER

// Global Constants
const NUM_ROWS = 10;
const NUM_COLS = 10;

// Create array to represent a grid
let grid = createGridArray();

// Add player to the grid array
let player = {
    row: 0,
    col: 0
}

grid[player.row][player.col] = 2;

// Create divs to model the grid array
createDivGrid(grid);

// Key Event Listeners - player movement
document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    if (e.keyCode === 39) { // Right arrow key
        updatePlayer(player.row, player.col + 1);
    } else if (e.keyCode === 37) { // Left arrow key
        updatePlayer(player.row, player.col - 1);
    } else if (e.keyCode === 38) { // up arrow key
        updatePlayer(player.row - 1, player.col);
    } else if (e.keyCode === 40) { // Down arrow key
        updatePlayer(player.row + 1, player.col);
    }
}

function updatePlayer(newRow, newCol) {
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

    grid[player.row][player.col] = 2;
}


