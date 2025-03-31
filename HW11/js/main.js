const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let mainSquare, secondarySquare;
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
    mainSquare = new Square(startPos1.x, startPos1.y, 20, 20, "purple");
    secondarySquare = new Square(startPos2.x, startPos2.y, 50, 50, "yellow");
}
function animateGreenSquare() {
    if (secondarySquare.theX + secondarySquare.theWidth >= canvas.width || secondarySquare.theX <= 0) {
        dx = -dx;
    }
    if (secondarySquare.theY + secondarySquare.theHeight >= canvas.height || secondarySquare.theY <= 0) {
        dy = -dy;
    }
    secondarySquare.setX(secondarySquare.theX + dx);
    secondarySquare.setY(secondarySquare.theY + dy);
    drawSquares();
    requestAnimationFrame(animateGreenSquare);
}
function drawSquares() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = mainSquare.theColor;
    ctx.fillRect(mainSquare.theX, mainSquare.theY, mainSquare.theWidth, mainSquare.theHeight);

    ctx.fillStyle = secondarySquare.theColor;
    ctx.fillRect(secondarySquare.theX, secondarySquare.theY, secondarySquare.theWidth, secondarySquare.theHeight);
}
function handleKeyPress(event) {
    const key = String.fromCharCode(event.which || event.keyCode).toLowerCase();
    if (key === "w") moveUp();
    else if (key === "s") moveDown();
    else if (key === "a") moveLeft();
    else if (key === "d") moveRight();
    if (hasCollided(mainSquare, secondarySquare)) {
        changeBackgroundColor();
        adjustSizes();
    }
    drawSquares();
}
function moveUp() {
    mainSquare.setY(mainSquare.theY - 10);
}
function moveDown() {
    mainSquare.setY(mainSquare.theY + 10);
}
function moveLeft() {
    mainSquare.setX(mainSquare.theX - 10);
}
function moveRight() {
    mainSquare.setX(mainSquare.theX + 10);
}
function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    canvas.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function adjustSizes() {
    mainSquare.setWidth(mainSquare.theWidth - 1);
    mainSquare.setHeight(mainSquare.theHeight - 1);
    secondarySquare.setWidth(secondarySquare.theWidth + 1);
    secondarySquare.setHeight(secondarySquare.theHeight + 1);
}
function hasCollided(obj1, obj2) {
    return !(
        (obj1.theY + obj1.theHeight < obj2.theY) ||
        (obj1.theY > obj2.theY + obj2.theHeight) ||
        (obj1.theX + obj1.theWidth < obj2.theX) ||
        (obj1.theX > obj2.theX + obj2.theWidth)
    );
}
