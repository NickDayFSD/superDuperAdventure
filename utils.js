import { getUser } from "./local-storage-utils.js";

export function rollGenerator(stat) {
    const roll = Math.ceil(Math.random() * 10);
    return roll + stat;
}

export function findById(array, id) {
    return array.find(item => item.id === id);
}

export function userSuccess(quest, questChoice) {
    const user = getUser();
    const userRoll = rollGenerator(user[questChoice.attribute]);

    const difficulty = quest.difficulty;
    if (difficulty <= userRoll) {
        return true;
    }
    return false;
}

export function doesUserSatisfyRequirements(requiredParamId, user) {
    const matchingItem = findById(user.equipment, requiredParamId);
    const matchingFriend = findById(user.friends, requiredParamId);

    if (matchingItem || matchingFriend) return true;

    return false;
}

