import { getUser, findHighestStat } from '../local-storage-utils.js';

const user = getUser();
const resultsP = document.querySelector('#results-p');
const resultsButton = document.querySelector('#retry-button');


let userMorality;

if (user.morality < -1) {
    userMorality = 'an Evil';
} else if (user.morality > 1) {
    userMorality = 'a Good';
} else {
    userMorality = 'an Average';
}

let userFriends;

if (user.friends.length === 1) {
    userFriends = `${user.friends.length} friend`;
} else {
    userFriends = `${user.friends.length} friends`;
}

const userCredits = user.credits;

resultsP.textContent = `Congratulations! You bested all of the space baddies on Terran with your magnificent ${findHighestStat(user)}. You were ${userMorality} person. You left ${userCredits} credits behind for whoever finds your body and died with ${userFriends}.`;
resultsButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});

const canvas = document.querySelector('#main-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;

const keys = [];

const player = {
    x: 250,
    y: 50,
    width: 65,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 4,
    movement: false,
};

const bluePlanet = {
    x: 200,
    y: 500,
    width: 900,
    height: 900,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false,
};

const baren = {
    x: 440,
    y: 20,
    width: 50,
    height: 50,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false,
};

const ice = {
    x: 90,
    y: 320,
    width: 50,
    height: 50,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false,
};

const lava = {
    x: 490,
    y: 410,
    width: 50,
    height: 50,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false,
};

const terran = {
    x: 990,
    y: 310,
    width: 50,
    height: 50,
    frameX: 0,
    frameY: 0,
    speed: 0,
    movement: false,
};

const playerSprite = new Image();
playerSprite.src = '../assets/spaceship_right.png';
const bluePlanetSprite = new Image();
bluePlanetSprite.src = '../assets/planet-pixel.png';
const barenSprite = new Image();
barenSprite.src = '../assets/Baren.png';
const iceSprite = new Image();
iceSprite.src = '../assets/Ice.png';
const lavaSprite = new Image();
lavaSprite.src = '../assets/Lava.png';
const terranSprite = new Image();
terranSprite.src = '../assets/Terran.png';

const background = new Image();

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}
function intersectRect() {
    if ((player.x >= terran.x && player.x <= (terran.x + 50)) && (player.y >= terran.y && player.y <= (terran.y + 50))) {
        localStorage.clear();
        window.location = '../';
    } }

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
        bluePlanetSprite,
        bluePlanet.width * bluePlanet.frameX,
        bluePlanet.height * bluePlanet.frameY,
        bluePlanet.width,
        bluePlanet.height,
        bluePlanet.x,
        bluePlanet.y,
        bluePlanet.width,
        bluePlanet.height
    );

    drawSprite(
        barenSprite,
        baren.width * baren.frameX,
        baren.height * baren.frameY,
        baren.width,
        baren.height,
        baren.x,
        baren.y,
        baren.width,
        baren.height
    );

    drawSprite(
        iceSprite,
        ice.width * ice.frameX,
        ice.height * ice.frameY,
        ice.width,
        ice.height,
        ice.x,
        ice.y,
        ice.width,
        ice.height
    );

    drawSprite(
        lavaSprite,
        lava.width * lava.frameX,
        lava.height * lava.frameY,
        lava.width,
        lava.height,
        lava.x,
        lava.y,
        lava.width,
        lava.height
    );

    drawSprite(
        terranSprite,
        terran.width * terran.frameX,
        terran.height * terran.frameY,
        terran.width,
        terran.height,
        terran.x,
        terran.y,
        terran.width,
        terran.height
    );

    movePlayer();
    requestAnimationFrame(animate);
    intersectRect();
}

animate();

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    delete keys[e.key];
});

function movePlayer() {
    if (keys['w'] && player.y > 1) {
        player.frameY = 0;
        player.y -= player.speed;
    } else if (keys['s'] && player.y < 800) {
        player.frameY = 0;
        player.y += player.speed;
    } else if (keys['a'] && player.x > 40) {
        player.frameY = 0;
        player.x -= player.speed;
        playerSprite.src = '../assets/spaceship_left.png';
    } else if (keys['d'] && player.x < 1040) {
        player.frameY = 0;
        player.x += player.speed;
        playerSprite.src = '../assets/spaceship_right.png';
    }
}
