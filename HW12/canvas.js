let canvas, ctx;
let player;
let direction = '';
let obstacles = [];
let collectibles = [];
let score = 0;

$(document).ready(function () {
    setup();

    $(document).keydown(function (e) {
        handleMovement(e.key);
    });
});

function setup() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    player = new Square(50, 50, 40, 40, "#0000FF");

    $.getJSON('obstacles.json', function (data) {
        data.obstacles.forEach(obj => {
            obstacles.push(new Square(obj.x, obj.y, obj.width, obj.height, obj.color));
        });
        drawCanvas();
    });
    $.getJSON('collectibles.json', function (data) {
        data.collectibles.forEach(obj => {
            collectibles.push(new Square(obj.x, obj.y, obj.width, obj.height, obj.color));
        });
        drawCanvas();
    });
}

function handleMovement(key) {
    let prevX = player.x;
    let prevY = player.y;

    if (key === "w") player.y -= 10;
    if (key === "s") player.y += 10;
    if (key === "a") player.x -= 10;
    if (key === "d") player.x += 10;
    for (let obs of obstacles) {
        if (checkCollision(player, obs)) {
            player.x = prevX;
            player.y = prevY;
            break;
        }
    }
    for (let i = collectibles.length - 1; i >= 0; i--) {
        if (checkCollision(player, collectibles[i])) {
            collectibles.splice(i, 1);
            score++;
        }
    }

    drawCanvas();
}

function drawCanvas() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    for (let obs of obstacles) {
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    }
    for (let c of collectibles) {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.width, c.height);
    }
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}
function checkCollision(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}
    