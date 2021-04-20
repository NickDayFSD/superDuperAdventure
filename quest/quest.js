const params = new URLSearchParams(window.location.search);
import { quests } from './data.js';
import { setUser, getUser } from '../local-storage-utils.js';
import { findById } from '../utils.js';

const user = getUser();

const params = new URLSearchParams(window.location.search);

const section = document.querySelector('section');
const h2 = document.querySelector('h2');
const pTagResults = document.querySelector('p');
const image = document.querySelector('img');
const form = document.querySelector('form');

const descriptionContainer = document.getElementById('description');


questId = params.get('id')
quest = findById(quests, questId)

h2.textContent = quest.title;
descriptionContainer.textContent = quest.description;


image.src = `../assets/${quest.image}` 


for (let choice of quest.choices) {
    
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;

    choicesContainer.append(choice.description, radio);

    label.append(radio);
    form.append(label);
}