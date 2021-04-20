
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
        age: 18,
        hp: 30 + 3 * formArray[1],
        xp: 0,
        credits: 0,
        equipment: [],
        friends: [],
        completedQuests: [],
        tagline,
        intelligence: formArray[0],
        stength: formArray[1],
        marksmanship: formArray[2],
        charisma: formArray[3],
        luck: formArray[4],
        morality: 0,
        wisdom: 0,
    };

    return user
}
