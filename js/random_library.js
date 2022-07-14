// Random Library

// Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low
}

// Random Integer: low (inclusive) to high (exclusive)
function randomInt(low, high) {
    return Math.floor(randomDec(low, high))
}

// Random rgb color "rgb(__, __, __)"
function randomRGB() {
    return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`
}