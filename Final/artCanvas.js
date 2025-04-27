const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let squares = [];
let colors = ['#ff4b5c', '#56cfe1', '#72efdd', '#ffbe0b', '#8338ec'];
let bgColor = 'black';

class Square {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.dx = (Math.random() - 0.5) * 5;
    this.dy = (Math.random() - 0.5) * 5;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.size > canvas.width || this.x < 0) this.dx *= -1;
    if (this.y + this.size > canvas.height || this.y < 0) this.dy *= -1;

    this.draw();
  }
}

function initSquares() {
  for (let i = 0; i < 15; i++) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let square = new Square(x, y, 30, randomColor);
    squares.push(square);
  }
}
function changeBackground() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  bgColor = `rgb(${r}, ${g}, ${b})`;
}
function checkCollisions() {
  for (let i = 0; i < squares.length; i++) {
    for (let j = i + 1; j < squares.length; j++) {
      if (Math.abs(squares[i].x - squares[j].x) < 30 && Math.abs(squares[i].y - squares[j].y) < 30) {
        changeBackground();
      }
    }
  }
}
function animate() {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  squares.forEach(square => {
    square.update();
  });
  checkCollisions();
  requestAnimationFrame(animate);
}
initSquares();
animate();
