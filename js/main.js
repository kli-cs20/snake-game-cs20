// Snake Game

// Add player to the grid array
let player = [
    { row: 7, col: 7},
    { row: 8, col: 7},
    { row: 9, col: 7},
]
    
    
let direction = "right";
for (let i = 0; i < player.length; i++) {

    grid[player[i].row][player[i].col] = 1;

}

// Create divs to model the grid array
createDivGrid(grid);

setInterval(draw, 200);

function draw() {

    movePlayer();

    updateGrid();
}






