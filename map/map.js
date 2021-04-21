import { getUser, areQuestsCompleted } from '../local-storage-utils.js';

const user = getUser();
const canvas = document.querySelector('#main-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;


if (areQuestsCompleted(user)) {
    window.location = '../results';
}

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


// show the reward over the top

const fugitive = {
    x: 200,
    y: 200,
    width: 30,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false
};

// show reward over the top

const beast = {
    x: 500,
    y: 500,
    width: 100,
    height: 100,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false
};

const playerSprite = new Image();
playerSprite.src = '../assets/main.png';
const fugitiveSprite = new Image();

fugitiveSprite.src = '../assets/darkknight.png';

const beastSprite = new Image();
beastSprite.src = '../assets/bahamut.png';
const background = new Image();
background.src = '../assets/map.jpg';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function intersectRect() {

    const fugitiveQuest = user.completedQuests.find(quest => quest.id === 'fugitive');
    const beastQuest = user.completedQuests.find(quest => quest.id === 'beast');
    if (!fugitiveQuest) {
        if ((player.x >= fugitive.x && player.x <= (fugitive.x + 50)) && (player.y >= fugitive.y && player.y <= (fugitive.y + 50))) {
            window.location = `../quest/?id=wigmolesia`;
        } 
    } 
    if (!beastQuest) {
        if ((player.x >= beast.x && player.x <= (beast.x + 50)) && (player.y >= beast.y && (player.y <= beast.y + 50))) {
            window.location = `../quest/?id=beast`;
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
        fugitiveSprite,
        fugitive.width * fugitive.frameX,
        fugitive.height * fugitive.frameY,
        fugitive.width,
        fugitive.height,
        fugitive.x,
        fugitive.y,
        fugitive.width,
        fugitive.height
    );

    drawSprite(
        beastSprite,
        beast.width * beast.frameX,
        beast.height * beast.frameY,
        beast.width,
        beast.height,
        beast.x,
        beast.y,
        beast.width,
        beast.height
    );
    movePlayer();
    requestAnimationFrame(animate);
    intersectRect();
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