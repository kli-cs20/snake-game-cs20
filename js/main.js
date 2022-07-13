// Snake Game

// Add player to the grid array
let player = {
    row: 7,
    col: 7,
    direction: ""
}
grid[player.row][player.col] = 1;



setInterval(draw, 200);

function draw() {
    movePlayer();


}






