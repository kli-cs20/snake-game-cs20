// Snake Game

// Add player to the grid array
let player = [
    { row: 7, col: 7},
    { row: 7, col: 8},
    { row: 7, col: 9},
]


for (let i = 0; i < player.length; i++) {

    grid[player[i].row][player[i].col] = 1;

}
    
let direction = "up";

// Create divs to model the grid array
createDivGrid(grid);

setInterval(draw, 500);

let game = true;

function draw() {
    if (game) {
        clearBoard(grid);

        movePlayer();
        checkCollisions();
        
        updateGrid();

    }   
}







