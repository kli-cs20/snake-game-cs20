// Customize Snake Game through user input

// Global (customizable) Variables
let segmentsGained = 3;
let numApples = 3;

// HTML Elements
const numAppleEl = document.getElementById("numApples");
const segmentsEl = document.getElementById("numSegments");

// Modal Stuff
const modalEl = document.getElementById("modal");
const showModalEl = document.getElementById('show-modal');
const hideModalEl = document.getElementById("hide-modal");

showModalEl.addEventListener("click", showModal);
hideModalEl.addEventListener("click", hideandUpdate)

function showModal() {
    modalEl.style.display = "block";
}
function hideandUpdate() {
    modalEl.style.display = "none";

    numApples = +numAppleEl.value;
    segmentsGained = +segmentsEl.value;
    console.log(`${numApples} and ${segmentsGained}`);
}


