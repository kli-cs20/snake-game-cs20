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
            } else if (grid[row][col] === 2) {
                divEl.classList.add("apple");
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col; ;

            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

function drawPlayer() {
    // Add player to the grid array
    player = [
        { row: 7, col: 9},
        { row: 7, col: 10},
        { row: 7, col: 11},
    ];

    // Draw Player
    for (let i = 0; i < player.length; i++) {
        grid[player[i].row][player[i].col] = 1;
    }
}

function createApples() {
    apples = [
        { row: randomInt(0, 15), col: randomInt(0, 15)},
    ];

    // Draw Apples
    for (let i = 0; i < apples.length; i++) {
        let thisApple = apples[i];
        grid[thisApple.row][thisApple.col] = 2;
    }
}

function startGame(e) {
    if (e.keyCode === 32) {
        game = "play";
    }
}

function clearBoard(array) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            array[row][col] = 0;
        }
    }
}

function drawApples() {
    for (let i = 0; i < apples.length; i++) {
        let thisApple = apples[i];
        grid[thisApple.row][thisApple.col] = 2;
    }
}

function newApple() {
    apples.push({ row: randomInt(0, 15), col: randomInt(0, 15) });
}

function eatApple() {
    let tail = player[player.length - 1];

    for (let i = 1; i <= segmentsGained; i++) {
        player.push({ row: tail.row, col: tail.col});
    }
}

// Key Event Listeners - player movement
document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
    if (e.keyCode === 39) { // Right arrow key
        if (direction !== "left") {
            direction = "right";
        }
    } else if (e.keyCode === 37) { // Left arrow key
        if (direction !== "right") {
            direction = "left";
        }
    } else if (e.keyCode === 38) { // up arrow key
        if (direction !== "down") {
            direction = "up";
        }
    } else if (e.keyCode === 40) { // Down arrow key
        if (direction !== "up") {
            direction = "down";
        }
    }
}

function movePlayer() {
    if (direction === "left") {
        checkWallCollisions(player[0].row, player[0].col - 1);
        updatePlayer(player[0].row, player[0].col - 1);
    } else if (direction === "right") {
        checkWallCollisions(player[0].row, player[0].col + 1);
        updatePlayer(player[0].row, player[0].col + 1);
    } else if (direction === "up") {
        checkWallCollisions(player[0].row - 1, player[0].col);
        updatePlayer(player[0].row - 1, player[0].col);
    } else if (direction === "down") {
        checkWallCollisions(player[0].row + 1, player[0].col);
        updatePlayer(player[0].row + 1, player[0].col);
    }
}

function updatePlayer(newRow, newCol) {
    checkApple(newRow, newCol);
    for (let i = player.length - 2; i >= 0; i--) {
        // Start at second to last element, go backwards from there
        // The second last element will become the element before it
        player[i + 1] = { ...player[i] };
    }
        
    // Update snake head
    player[0] = { row: newRow, col: newCol };

    // Test if snake runs into itself
    checkSelfCollide();
        
    // Draw Player (if game not over)
    for (let i = 0; i < player.length; i++) {
        grid[player[i].row][player[i].col] = 1;
    }

    
}

function checkWallCollisions(row, col) {
    if (row < 0 || row > 14) {
        gameOver();
    } else if (col < 0 || col > 14) {
        gameOver();
    }
}

function checkApple(row, col) {
    if (grid[row][col] === 2) {
        score += 10;
        apples.pop();
        newApple();
        eatApple();
    }
}

function checkSelfCollide() {
    for (let i = 1; i < player.length; i++) {
        if (player[i].row === player[0].row && player[i].col === player[0].col) {
            gameOver();
        }
    }
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

function gameOver() {
    game = "over";
    resultEl.innerHTML = "You died... press Space to play again"
    setTimeout(reset, 3000);
}

function reset() {
    drawPlayer();
    createApples();
    direction = "left";
    game = "start";
}

