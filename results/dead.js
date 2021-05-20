import { findHighestStat, getUser } from '../local-storage-utils.js';

const user = getUser();
const retryButton = document.querySelector('#retry-button');
const pResults = document.querySelector('#results-p');

retryButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});

let userMorality;

// this code is used here and in results.js...should probably be a function used in both places
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

// console.log(findHighestStat(user))
const highestSkill = findHighestStat(user);


pResults.textContent = `You died ${userMorality} person. Not even your ${highestSkill} could save you this time. You left ${userCredits} credits behind for whoever finds your body and died with ${userFriends}. `;
