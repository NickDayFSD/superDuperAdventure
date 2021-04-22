import { quests } from './quest/data.js';

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
        credits: 0,
        equipment: [],
        friends: [],
        completedQuests: {},
        tagline,
        intelligence: Number(formArray[0]),
        strength: Number(formArray[1]),
        marksmanship: Number(formArray[2]),
        charisma: Number(formArray[3]),
        luck: Number(formArray[4]),
        morality: 0,
        choices: []
    };

    return user;
}

export function areQuestsCompleted(user) {

    for (let object of quests) {

        if (!user.completedQuests[object.id]) {
            return false;
        }
    }
    return true;
}

export function positiveUserUpdate(choice, quest) {
    const user = getUser();

    user.credits += choice.positiveResult.reward.credits;
    user.credits += quest.credits;

    if (choice.positiveResult.reward.equipment) {
        user.equipment.push(choice.positiveResult.reward.equipment);
    }
    if (choice.positiveResult.reward.friend) {
        user.friends.push(choice.positiveResult.reward.friend);
    }

    user.morality += choice.morality;

    user.completedQuests[quest.id] = true;

    setUser(user);
}

export function negativeUserUpdate(choice, quest) {
    const user = getUser();

    user.credits += choice.negativeResult.reward.credits;
    user.credits += quest.credits;

    if (choice.negativeResult.reward.equipment) {
        user.equipment.push(choice.negativeResult.reward.equipment);
    }
    if (choice.negativeResult.reward.friend) {
        user.friends.push(choice.negativeResult.reward.friend);
    }

    user.morality += choice.morality;

    user.completedQuests[quest.id] = true;

    setUser(user);
}

//export function updateUserCredits(user, success, choice) {
//     user.credits += choice.positiveResult.reward.credits;
//     user.credits += quest.credits;
//     setUser(user);
// }

// export 
// export function updateUserGivenChoice(success, user, choice, quest) {
//     if (success === true) {
//         user.credits += choice.positiveResult.reward.credits;
//         user.equipment.push(choice.positiveResult.reward.equipment);
//         user.friends.push(choice.positiveResult.reward.friend);
//         user.credits += quest.credits;
//         setUser(user);
//     } else {
//         user.credits += choice.negativeResult.reward.credits;
//         user.equipment.push(choice.negativeResult.reward.equipment);
//         user.friends.push(choice.negativeResult.reward.friend);
//         user.credits += quest.credits;
//         setUser(user);
//     }
// }