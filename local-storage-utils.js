
const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function createUser(name, tagline, hp, cunning, strength, marksmanship, charisma) {
    const user = {
        name,
        tagline,
        hp,
        xp: 0,
        cunning,
        strength,
        marksmanship,
        charisma,
        equipment: [],
        friends: [],
        gold: 0,
        age: 18,
        morality: 0,
        wisdom: 0,
    }

    return user;
}