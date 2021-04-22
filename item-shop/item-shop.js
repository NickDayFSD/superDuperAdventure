import { buyItem, getUser, sellItem } from '../local-storage-utils.js';
import { items } from './item-data.js';
import { renderHeader } from '../render-user-stats.js';

const body = document.querySelector('body');
const itemShopSection = document.querySelector('#item-shop-section');
const userSection = document.querySelector('#user-section');
const user = getUser();

const header = renderHeader(user);

body.prepend(header);

items.forEach(item => {
    const itemDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    //const image = document.createElement('image');
    const p = document.createElement('p');
    const button = document.createElement('button');

    itemDiv.classList.add('item');

    h2.textContent = item.name;

    //image.src = item.image;

    p.textContent = `${item.value}c`;

    button.innerText = 'Buy';

    button.addEventListener('click', () => {
        buyItem(item);
    //remove item from view;

    });

    itemDiv.append(h2, p, button);
    itemShopSection.append(itemDiv);
});

user.equipment.array.forEach(item => {
    const itemDiv = document.createElement('div');

    const h2 = document.createElement('h2');
    //const image = document.createElement('image');
    const p = document.createElement('p');
    const button = document.createElement('button');

    itemDiv.classList.add('item');

    h2.textContent = item.name;

    //image.src = item.image;

    p.textContent = `${item.value}c`;

    button.innerText = 'Buy';

    button.addEventListener('click', () => {
        sellItem(item);
    //remove item from view;

    });

    itemDiv.append(h2, p, button);

    userSection.append(itemDiv);
});

