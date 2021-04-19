const sliderArray = document.querySelectorAll('.slider-inputs');

const form = document.querySelector('form');

console.log(sliderArray);

for (let slider of sliderArray) {
    const current = slider.value;
    console.log(current)
}
// on mousemove
form.addEventListener('change', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const attributesData =
        console.log(e.target.value);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})