import { getUser } from '../local-storage-utils.js';

export function renderHeader(user) {

    const header = document.createElement('header');
    const image = document.createElement('img');
    const pName = document.createElement('p');
    const pHp = document.createElement('p');
    const pCredits = document.createElement('p');
    const equipmentUl = document.createElement('ul');
    const friendsUl = document.createElement('ul');

    pName.textContent = `Name: ${user.name}`;
    pName.id = 'name';

    pHp.textContent = `Hp: ${user.hp}`;
    pHp.id = 'hp';

    pCredits.textContent = `Credits: ${user.credits}`;
    pCredits.id = 'credits';

    equipmentUl.textContent = 'Equipment:';
    equipmentUl.classList.add('dropdown');
    equipmentUl.id = 'equipment';

    user.equipment.forEach(item => {
        const li = document.createElement('li');

        li.textContent = item.name;
        li.style.display = 'none';
        li.classList.add('friends');

        equipmentUl.append(li);

        equipmentUl.addEventListener('pointerenter', () => {
            li.style.display = 'block';
        });

        equipmentUl.addEventListener('pointerleave', () => {
            li.style.display = 'none';
        });
    });

    friendsUl.textContent = 'Friends:';
    friendsUl.classList.add('dropdown');
    friendsUl.id = 'friends';
    
   
    user.friends.forEach(item => {
        const li = document.createElement('li');
   
        li.textContent = item.name;
        li.style.display = 'none';

        friendsUl.append(li);

        friendsUl.addEventListener('pointerenter', () => {
            li.style.display = 'block';
        });

        friendsUl.addEventListener('pointerleave', () => {
            li.style.display = 'none';
        });
    });



    image.src = `../assets/main-display.png`;

    header.append(image, pName, pHp, pCredits, equipmentUl, friendsUl);
    return header;
}

export function updateHeader() {
    
    const user = getUser();
    const health = document.querySelector('#hp');
    const credits = document.querySelector('#credits');
    const equipmentUl = document.querySelector('#equipment');
    const friendsUl = document.querySelector('#friends');
    const friendsLi = document.querySelectorAll('.friends');
    const equipmentLi = document.querySelectorAll('.friends');
    
    console.log(friendsLi);
    health.textContent = `Hp: ${user.hp}`;
    credits.textContent = `Credits: ${user.credits}`;
    
    friendsLi.forEach(item => equipmentUl.append(item));
    equipmentLi.forEach(item => friendsUl.append(item));


    return [health, credits];

}