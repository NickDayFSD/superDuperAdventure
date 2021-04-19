
const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function createUser(name, tagline, formArray) {
    const user = {
        name,
        tagline,
        hp,
        xp: 0,
        intelligence: formArray[0],
        stength: formArray[1],
        marksmanship: formArray[2],
        charisma: formArray[3],
        luck: formArray[4],
        equipment: [],
        friends: [],
        gold: 0,
        age: 18,
        morality: 0,
        wisdom: 0,
    }

    return user;
}