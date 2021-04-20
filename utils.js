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

    console.log('this is the user questChoice attribute: ' + user[questChoice.attribute]);
    console.log('this is the questChoice: ' + questChoice);
    console.log('this is the user roll: ' + userRoll);

    const difficulty = quest.difficulty;
    if (difficulty <= userRoll) {
        return true;
    }
    return false;
}