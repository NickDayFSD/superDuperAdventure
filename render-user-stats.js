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
    pCredits.id = 'gold';

    equipmentUl.textContent = 'Equipment:';
    equipmentUl.classList.add('dropdown');

    user.equipment.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.style.display = 'none';
        equipmentUl.append(li);
        equipmentUl.addEventListener('pointerenter', () => {
            li.style.display = 'block';
        })
        equipmentUl.addEventListener('pointerleave', () => {
            li.style.display = 'none';
        })
    })

    friendsUl.textContent = 'Friends:';
    friendsUl.classList.add('dropdown');
    friendsUl.addEventListener('', () => {

        user.friends.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            friendsUl.append(li);
            friendsUl.addEventListener('pointerenter', () => {
                li.style.display = 'block';
            })
            friendsUl.addEventListener('pointerleave', () => {
                li.style.display = 'none';
            })
        })

    })

    image.src = `../assets/main-display.png`;

    header.append(image, pName, pHp, pCredits, equipmentUl, friendsUl);
    return header;
}