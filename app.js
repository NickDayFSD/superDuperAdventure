import { createUser } from "./local-storage-utils";

const attributeArray = document.querySelectorAll('.attribute-inputs');
const totalAttributePoints = document.querySelector('#available-attribute-points');

const form = document.querySelector('form');

const intelligence = Number(attributeArray[0].value);
const strength = Number(attributeArray[1].value);
const marksmanship = Number(attributeArray[2].value);
const charisma = Number(attributeArray[3].value);
const luck = Number(attributeArray[4].value);

console.log(attributeArray)
form.addEventListener('change', (e) => {
    e.preventDefault();
    const intelligence = Number(attributeArray[0].value);
    const strength = Number(attributeArray[1].value);
    const marksmanship = Number(attributeArray[2].value);
    const charisma = Number(attributeArray[3].value);
    const luck = Number(attributeArray[4].value);
    let attributeTotal = strength + intelligence + marksmanship + charisma + luck;
    let totalPoints = 8 - attributeTotal;

    for (let attribute of attributeArray) {
        attribute.max = totalPoints + attribute.value;
    }

    totalAttributePoints.textContent = totalPoints;

})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createUser()
})
