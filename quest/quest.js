const params = new URLSearchParams(window.location.search);
import { quests } from './data.js';
import { getUser, positiveUserUpdate, negativeUserUpdate } from '../local-storage-utils.js';
import { findById, userSuccess, doesUserSatisfyRequirements } from '../utils.js';
import { renderHeader } from '../render-user-stats.js';

const user = getUser();

const body = document.querySelector('body');

const header = renderHeader(user);

body.prepend(header);


const section = document.querySelector('section');
const h2 = document.querySelector('h2');
const pTagResults = document.querySelector('#results-text');
const image = document.querySelector('.quest-image');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit-button');
const descriptionContainer = document.getElementById('description');
const resultReadout = document.getElementById('results');
const resultsButton = document.getElementById('results-button');

const audio = document.createElement('audio');
audio.autoplay = true;
audio.volume = 0.5;
const sourceTag = document.createElement('source');

const questId = params.get('id');
const quest = findById(quests, questId);

h2.textContent = quest.title;
descriptionContainer.textContent = quest.description;


sourceTag.src = `../assets/${quest.audio}`;
image.src = `../assets/${quest.image}`;

section.append(audio);

audio.append(sourceTag);
audio.controls = true;

for (let choice of quest.choices) {

    if (doesUserSatisfyRequirements(choice.required.id, user)) {
        const label = document.createElement('label');
        const radio = document.createElement('input');

        radio.type = 'radio';
        radio.name = 'choice';
        radio.value = choice.id;

        label.append(radio, choice.description);
        form.prepend(label);
    }
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
        pTagResults.textContent = choice.positiveResult.message + ` ${user.tagline}!!!`;
        positiveUserUpdate(choice, quest);
    } else {
        negativeUserUpdate(choice, quest);
        pTagResults.textContent = choice.negativeResult.message;
    }

    resultReadout.classList.add('display');

    submitButton.style.display = 'none';

    resultsButton.addEventListener('click', () => {
        switch (choice.id) {
            case 'begin':
                window.location = `../quest/?id=wigmolesia`;
                break;
            case 'saloon':
                window.location = `../quest/?id=saloon`;
                break;
            case 'sheriff':
                window.location = `../quest/?id=sheriff`;
                break;
            case 'steal':
                window.location = `../quest/?id=wigmolesia`;
                break;
            case 'talkWithConvict':
                window.location = `../quest/?id=wigmolesia`;
                break;
            case 'talkWithSheriff':
                window.location = `../quest/?id=wigmolesia`;
                break;
            default:
                window.location = '../map';
        }
    });
});


