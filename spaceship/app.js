const canvas = document.querySelector('#main-canvas');
const ctx = canvas.getContext('2d');
const music = document.getElementById('spaceTravelAudio');

music.volume = 0.3;
canvas.width = 1200;
canvas.height = 900;

const keys = [];

const planetOne = {
    x: 700,
    y: 400,
    width: 700,
    height: 700,
};

const planetTwo = {
    x: 400,
    y: 200,
    width: 700,
    height: 700,
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
planetOneSprite.src = '../assets/test_planet.png';
const planetTwoSprite = new Image();
planetTwoSprite.src = '../assets/Lava.png';
const background = new Image();
background.src = '../assets/space.png';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function intersectRect() {
    if ((player.x + player.y) === (planetOne.x + planetOne.y)) {
        window.location = '../map/index.html';
    }

    if ((player.x + player.y) === (planetTwo.x + planetTwo.y)) {
        alert('Hooray');
    }
}

const makeSpriteArgs = (sprite, planet, player) => [
    sprite,
    planet.width * player.frameX,
    planet.height * player.frameY,
    planet.width,
    planet.height,
    planet.x,
    planet.y,
    planet.width,
    planet.height
];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, 1200, 900);
    
    // spreading this array should work, if memory serves
    drawSprite(...makeSpriteArgs(playerSprite, player, player));
    drawSprite(...makeSpriteArgs(planetOneSprite, planetOne, player));
    drawSprite(...makeSpriteArgs(planetTwoSprite, planetTwo, player));

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
    // dot notation should work, right?
    if (keys.w && player.y > 70) {
        player.y -= player.speed;
    } else if (keys.s && player.y < 800) {
        player.y += player.speed;
    } else if (keys.a && player.x > 150) {
        player.x -= player.speed;
        playerSprite.src = '../assets/spaceship_left.png';
    } else if (keys.d && player.x < 960) {
        player.x += player.speed;
        playerSprite.src = '../assets/spaceship_right.png';
    }
}


