const params = new URLSearchParams(window.location.search);
import { quests } from './data.js';
import { setUser, getUser } from '../local-storage-utils.js';
import { findById, userSuccess } from '../utils.js';

const user = getUser();

const h2 = document.querySelector('h2');
const pTagResults = document.querySelector('p');
const image = document.querySelector('img');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit-button');
const descriptionContainer = document.getElementById('description');
const resultReadout = document.getElementById('results');

const questId = params.get('id')
const quest = findById(quests, questId)

console.log('this is the quest' + questId, quest)

h2.textContent = quest.title;
descriptionContainer.textContent = quest.description;


image.src = `../assets/${quest.image}` 


for (let choice of quest.choices) {
    
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;

    label.append(radio, choice.description);
    form.prepend(label);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);
    
    // roll to see if positive or negative result
    const success = userSuccess(quest, choice);
    // display correct result
    if (success === true) {
        pTagResults.textContent = choice.positiveResult.message;
    } else {
        pTagResults.textContent = choice.negativeResult.message;
    }

    resultReadout.classList.add('display');
    console.log(success);
});
