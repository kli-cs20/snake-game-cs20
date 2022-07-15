// Customize Snake Game through user input

// Global (customizable) Variables
let segmentsGained = 3;
let numApples = 3;
let frames = 150;

// HTML Elements
const oneAppleBtn = document.getElementById("oneApple");
const threeApplesBtn = document.getElementById("threeApples");
const fiveApplesBtn = document.getElementById("fiveApples");

oneAppleBtn.addEventListener("click", adjustApples(1));
threeApplesBtn.addEventListener("click", adjustApples(3));
fiveApplesBtn.addEventListener("click", adjustApples(5));

function adjustApples(n) {
    numApples = n;

}