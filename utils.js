
export function rollGenerator(stat) {
    const roll = Math.ceil(Math.random() * 10);
    return roll + stat;
}

export function findById(array, id) {
    return array.find(item => item.id === id);
}