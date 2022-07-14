// GRID FUNCTIONS

// Global Constants
const NUM_ROWS = 15;
const NUM_COLS = 15;

// Create array to represent a grid
let grid = createGridArray();
let temp = [];


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
            if (grid[row][col] === 0) {
                divEl.classList.add("empty");
            } else if (grid[row][col] === 1) {
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

function startGame() {
    game = "play";
}

function drawPlayer() {
    // Add player to the grid array
    player = [
        { row: 7, col: 7},
        { row: 7, col: 8},
        { row: 7, col: 9},
    ];

    // Draw Player
    for (let i = 0; i < player.length; i++) {
        grid[player[i].row][player[i].col] = 1;
    }
}

function createApples() {
    apples = [
        { row: randomInt(0, 15), col: randomInt(0, 15)},
        { row: randomInt(0, 15), col: randomInt(0, 15)},
        { row: randomInt(0, 15), col: randomInt(0, 15)},
        { row: randomInt(0, 15), col: randomInt(0, 15)},
        { row: randomInt(0, 15), col: randomInt(0, 15)},
    ];

    // Draw Apples
    for (let i = 0; i < apples.length; i++) {
        let thisApple = apples[i];
        grid[thisApple.row][thisApple.col] = 2;
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
        updatePlayer(player[0].row, player[0].col - 1);
    } else if (direction === "right") {
        updatePlayer(player[0].row, player[0].col + 1);
    } else if (direction === "up") {
        updatePlayer(player[0].row - 1, player[0].col);
    } else if (direction === "down") {
        updatePlayer(player[0].row + 1, player[0].col);
    }
}

function updatePlayer(newRow, newCol) {

    for (let i = player.length - 2; i >= 0; i--) {
        // Start at second to last element, go backwards from there
        // The second last element will become the element before it
        player[i + 1] = { ...player[i] };
    }

    // Update snake head
    player[0] = { row: newRow, col: newCol };

    // Check new coordinates if allowed
    checkCollisions();

    // Draw Player (if game not over)
    for (let i = 0; i < player.length; i++) {
        grid[player[i].row][player[i].col] = 1;
    }
}

function removeBlock(block) {
    // Set grid array to 0 for current location
    grid[block.row][block.col] = 0;
}



function updateGrid() {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            if (grid[row][col] === 0) {
                // Update class and grid
                let cellId = "cell" + row + "-" + col;
                document.getElementById(cellId).classList.remove("player");
                document.getElementById(cellId).classList.remove("apple");
                document.getElementById(cellId).classList.add("empty");
            } else if (grid[row][col] === 1) {
                // Update class and grid
                let cellId = "cell" + row + "-" + col;
                document.getElementById(cellId).classList.remove("empty");
                document.getElementById(cellId).classList.remove("apple");
                document.getElementById(cellId).classList.add("player");
            } else if (grid[row][col] === 2) {
                // Update class and grid
                let cellId = "cell" + row + "-" + col;
                document.getElementById(cellId).classList.remove("empty");
                document.getElementById(cellId).classList.remove("player");
                document.getElementById(cellId).classList.add("apple");
            }
        }
    }
}

function checkCollisions() {
    if (player[0].row < 0 || player[0].row > 14) {
        gameOver();
    } else if (player[0].col < 0 || player[0].col > 14) {
        gameOver();
    }
}

function gameOver() {
    game = "over";
    resultEl.innerHTML = "You died..."
    setTimeout(reset, 3000);
}

function reset() {
    drawPlayer();
    direction = "left";
    game = "start";
}

function clearBoard(array) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            array[row][col] = 0;
        }
    }
}