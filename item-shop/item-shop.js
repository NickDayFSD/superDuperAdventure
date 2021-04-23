import { buyItem, getUser, sellItem } from '../local-storage-utils.js';
import { items } from './item-data.js';
import { renderHeader, updateHeader } from '../render-user-stats.js';

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

    p.textContent = `${(item.value) * 1.2}c`;

    button.innerText = 'Buy';

    button.addEventListener('click', () => {
        const boughtItem = buyItem(item);
        updateHeader();
        if (boughtItem) {
            itemDiv.style.display = 'none';
        } else if (!boughtItem) {
            alert('You dont have enough money for that, partner!');
        }
    //remove item from view;

    });

    itemDiv.append(h2, p, button);
    itemShopSection.append(itemDiv);
});


user.equipment.forEach(item => {
    const itemDiv = document.createElement('div');

    const h2 = document.createElement('h2');
    //const image = document.createElement('image');
    const p = document.createElement('p');
    const button = document.createElement('button');

    itemDiv.classList.add('item');

    h2.textContent = item.name;

    //image.src = item.image;

    p.textContent = `${(item.value) * .8}c`;

    button.innerText = 'Sell';

    button.addEventListener('click', () => {
        sellItem(item);
        itemDiv.style.display = 'none';
        updateHeader();

    });

    itemDiv.append(h2, p, button);

    userSection.append(itemDiv);
});

