import { getUser, areQuestsCompleted } from '../local-storage-utils.js';

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

resultsP.textContent = `Congradulations! You bested all of the space baddies on Terran. You were ${userMorality} person. You left ${userCredits} credits behind for whoever finds your body and died with ${userFriends}.`
resultsButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
})

const canvas = document.querySelector('#main-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;

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

const playerSprite = new Image();
playerSprite.src = '../assets/main.png';

const background = new Image();
background.src = '../assets/ship.png';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

// function intersectRect() {

//     const gangbustersQuest = user.completedQuests.gangbusters;

//     if (!gangbustersQuest) {
//         if ((player.x >= gangbusters.x && player.x <= (gangbusters.x + 50)) && (player.y >= gangbusters.y && (player.y <= gangbusters.y + 50))) {
//             window.location = `../quest/?id=gangbusters`;
//         } 
//     }
// }



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

    movePlayer();
    requestAnimationFrame(animate);
    // intersectRect();
}

animate();

window.addEventListener('keydown', (e) => {
    keys[e.key] = true; // Another way to add key presses into the keys array
});

window.addEventListener('keyup', (e) => {
    delete keys[e.key];
});

function movePlayer() {
    if (keys['w'] && player.y > 320) {
        player.frameY = 3;
        player.y -= player.speed;
    } else if (keys['s'] && player.y < 525) {
        player.frameY = 0;
        player.y += player.speed;
    } else if (keys['a'] && player.x > 210) {
        player.frameY = 1;
        player.x -= player.speed;
    } else if (keys['d'] && player.x < 1040) {
        player.frameY = 2;
        player.x += player.speed;
    }
}