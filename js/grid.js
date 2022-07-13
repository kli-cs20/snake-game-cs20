// GRID FUNCTIONS

function createGridArray() {
    // Create and return a grid array
    return [ [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 1, 1, 0, 0, 0, 0, 0], 
             [0, 0, 0, 1, 0, 1, 0, 0, 0, 0], 
             [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], 
             [0, 0, 0, 1, 0, 0, 0, 1, 0, 0], 
             [0, 0, 0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 
             [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 1, 0, 0, 0, 0, 0, 0] ];
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
                divEl.classList.add("grey");
            } else if (grid[row][col] === 2) {
                divEl.classList.add("player");
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col; 

            // Add Event Listener to each div element
            divEl.addEventListener("click", cellClicked);

            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

function cellClicked(e) {
    // console.log(e.target);
    // Set color of the clicked cell

    // Get value of color select element
    let color = document.getElementById("cell-color").value;

    // Get row and col of the clicked cell
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;

    // Update clicked cell based on color selection
    e.target.classList = ""; // Clear class list of cell
    grid[row][col] = 0; // Set grid to "white";

    if (color === "grey") {
        e.target.classList.add("grey");
        grid[row][col] = 1;
    }

}