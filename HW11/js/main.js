const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let square1, square2;
const startPos1 = { x: 50, y: 50 };
const startPos2 = { x: 500, y: 500 };
let dx = 2;
let dy = 2;

createSquares();
drawSquares();
requestAnimationFrame(animateGreenSquare);

$(document).ready(() => {
    $(document).keypress(handleKeyPress);
});
function createSquares() {
    square1 = new Square(startPos1.x, startPos1.y, 20, 20, "purple");
    square2 = new Square(startPos2.x, startPos2.y, 50, 50, "yellow");
}
function animateGreenSquare() {
    // Bounce logic
    if (square2.theX + square2.theWidth >= canvas.width || square2.theX <= 0) {
        dx = -dx;
    }
    if (square2.theY + square2.theHeight >= canvas.height || square2.theY <= 0) {
        dy = -dy;
    }
    square2.setX(square2.theX + dx);
    square2.setY(square2.theY + dy);
    drawSquares();
    requestAnimationFrame(animateGreenSquare);
}
function drawSquares() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}
function handleKeyPress(event) {
    const key = String.fromCharCode(event.which || event.keyCode).toLowerCase();
    if (key === "w") moveUp();
    else if (key === "s") moveDown();
    else if (key === "a") moveLeft();
    else if (key === "d") moveRight();
    if (hasCollided(square1, square2)) {
        changeBackgroundColor();
        adjustSizes();
    }
    drawSquares();
}
function moveUp() {
    square1.setY(square1.theY - 10);
}
function moveDown() {
    square1.setY(square1.theY + 10);
}
function moveLeft() {
    square1.setX(square1.theX - 10);
}
function moveRight() {
    square1.setX(square1.theX + 10);
}
function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    canvas.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function adjustSizes() {
    square1.setWidth(square1.theWidth - 1);
    square1.setHeight(square1.theHeight - 1);
    square2.setWidth(square2.theWidth + 1);
    square2.setHeight(square2.theHeight + 1);
}
function hasCollided(obj1, obj2) {
    return !(
        (obj1.theY + obj1.theHeight < obj2.theY) ||
        (obj1.theY > obj2.theY + obj2.theHeight) ||
        (obj1.theX + obj1.theWidth < obj2.theX) ||
        (obj1.theX > obj2.theX + obj2.theWidth)
    );
}
