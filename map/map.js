import { getUser } from '../local-storage-utils.js';

const user = getUser();



const canvas = document.querySelector('#main-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;

const playerSprite = new Image();
playerSprite.src = '../assets/main.png';
const bossSprite = new Image();
bossSprite.src = '../assets/bahamut.png';
const background = new Image();
background.src = '../assets/map.jpg';

const keys = [];

const player = {
    x: 400,
    y: 400,
    width: 35,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 4,
    movement: false,
};

const boss = {
    x: 200,
    y: 200,
    width: 100,
    height: 100,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false
};

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function intersectRect() {
    const matchingQuest = user.completedQuests.find(quest => quest.id === 'fugitive');
    if (!matchingQuest) {
        if ((player.x + player.y) === (boss.x + boss.y)) {
            window.location = "../quest/?id=fugitive";
        }
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
        bossSprite,
        boss.width * boss.frameX,
        boss.height * boss.frameY,
        boss.width,
        boss.height,
        boss.x,
        boss.y,
        boss.width,
        boss.height
    );
    movePlayer();
    requestAnimationFrame(animate);
    intersectRect(player, boss);
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
        player.frameY = 3;
        player.y -= player.speed;
    } else if (keys['s'] && player.y < 800) {
        player.frameY = 0;
        player.y += player.speed;
    } else if (keys['a'] && player.x > 150) {
        player.frameY = 1;
        player.x -= player.speed;
    } else if (keys['d'] && player.x < 960) {
        player.frameY = 2;
        player.x += player.speed;
    }
}