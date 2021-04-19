const sliderArray = document.querySelectorAll('.slider-inputs');
const spanArray = document.querySelectorAll('.input-span');
const totalAttributePoints = document.querySelector('#available-attribute-points');

const form = document.querySelector('form');


console.log(sliderArray)
form.addEventListener('change', (e) => {
    e.preventDefault();
    const cunning = Number(sliderArray[0].value);
    const strength = Number(sliderArray[1].value);
    const marksmanship = Number(sliderArray[2].value);
    const charisma = Number(sliderArray[3].value);
    let attributeTotal = strength + cunning + marksmanship + charisma;
    let totalPoints = 10 - attributeTotal;

    for (let slider of sliderArray) {
        let nextSibling = slider.nextElementSibling;
        nextSibling.textContent = slider.value;
        slider.max = totalPoints;
    }

    totalAttributePoints.textContent = totalPoints;

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
