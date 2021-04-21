import { getUser } from './local-storage-utils.js';

export function rollGenerator(stat) {
    const roll = Math.ceil(Math.random() * 10);
    return roll + stat;
}

export function findById(array, id) {
    return array.find(item => item.id === id);
}

// problem if luck = 0, always fails maybe change i
export function luckRoll(luck, stat) {
    const rolls = [];
    let i;
    for (i = 0; i < luck; i++) {
        const roll = rollGenerator(stat);
        rolls.push(roll);
    }
    console.log(rolls);
    return Math.max(...rolls);
}

export function userSuccess(quest, questChoice) {
    const user = getUser();
    const userRoll = luckRoll(user.luck, user[questChoice.attribute]);

    const difficulty = quest.difficulty;
    if (difficulty <= userRoll) {
        return true;
    }
    return false;
}

export function doesUserSatisfyRequirements(requiredParamId, user) {

    const matchingItem = findById(user.equipment, requiredParamId);
    const matchingFriend = findById(user.friends, requiredParamId);

    if (matchingItem || matchingFriend || !requiredParamId) return true;

    return false;
}

