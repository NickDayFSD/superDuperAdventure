const canvas = document.querySelector('#main-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;

const keys = [];

const planetOne = {
    x: 900,
    y: 600,
    width: 70,
    height: 48,
};

const player = {
    x: 400,
    y: 400,
    width: 70,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 4,
    movement: false,
};

const playerSprite = new Image();
playerSprite.src = '../assets/spaceship_left.png';
const planetOneSprite = new Image();
planetOneSprite.src = '../assets/Terran.png';
const background = new Image();
background.src = '../assets/space.png';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function intersectRect() {
    if ((player.x + player.y) === (planetOne.x + planetOne.y)) {
        window.location = '../map/index.html';
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, 1200, 900);
    drawSprite(
        playerSprite,
        player.width * player.frameX,
        player.height * player.frameY,
        player.width,
        player.height,
        player.x,
        player.y,
        player.width,
        player.height
    );
    drawSprite(
        planetOneSprite,
        planetOne.width * player.frameX,
        planetOne.height * player.frameY,
        planetOne.width,
        planetOne.height,
        planetOne.x,
        planetOne.y,
        planetOne.width,
        planetOne.height
    );
    movePlayer();
    requestAnimationFrame(animate);
    intersectRect(planetOne, player);
}

animate();

window.addEventListener('keydown', (e) => {
    keys[e.key] = true; // Another way to add key presses into the keys array
});

window.addEventListener('keyup', (e) => {
    delete keys[e.key];
});

function movePlayer() {
    if (keys['w'] && player.y > 70) {
        player.y -= player.speed;
    } else if (keys['s'] && player.y < 800) {
        player.y += player.speed;
    } else if (keys['a'] && player.x > 150) {
        player.x -= player.speed;
    } else if (keys['d'] && player.x < 960) {
        player.x += player.speed;
    }
}


