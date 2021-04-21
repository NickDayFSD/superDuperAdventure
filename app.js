import { createUser, setUser } from './local-storage-utils.js';

const attributeInputs = document.querySelectorAll('.attribute-inputs');
const totalAttributePoints = document.querySelector('#available-attribute-points');
const audio = document.querySelector('audio');

const form = document.querySelector('form');

audio.volume = .5;


form.addEventListener('change', (e) => {
    e.preventDefault();
    const intelligence = Number(attributeInputs[0].value);
    const strength = Number(attributeInputs[1].value);
    const marksmanship = Number(attributeInputs[2].value);
    const charisma = Number(attributeInputs[3].value);
    const luck = Number(attributeInputs[4].value);

    let attributeTotal = strength + intelligence + marksmanship + charisma + luck;
    let totalPoints = 8 - attributeTotal;

    for (let attribute of attributeInputs) {
        attribute.max = Number(totalPoints) + Number(attribute.value);
    }

    totalAttributePoints.textContent = totalPoints;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const tagline = formData.get('tagline');
    const attributeArray = [
        formData.get('intelligence'),
        formData.get('strength'),
        formData.get('marksmanship'),
        formData.get('charisma'),
        formData.get('luck')
    ];

    const user = createUser(name, tagline, attributeArray);
    setUser(user);
    window.location = `../quest/?id=intro`;
});
