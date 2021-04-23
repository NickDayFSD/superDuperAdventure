import { setUser, getUser, areQuestsCompleted, findHighestStat } from '../local-storage-utils.js';

const test = QUnit.test;

test('Test setUser function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        age: 12,
    };

    setUser(user);

    const expected = user;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('Test getUser function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        age: 12,
    };

    setUser(user);

    const expected = user;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser(user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('Test to see if all user quests are completed', (expect) => {
    const expected = false;

    const user = {
        completedQuests: {
            beast: true,
            fugitive: false,
        }
    };

    const actual = areQuestsCompleted(user);

    expect.deepEqual(actual, expected);
});

test('Test to see if user sells an item', (expect) => {

    const user = {
        equipment: [{
            id: 'weapon',
            value: 100,
        }, {
            id: 'nunchucks',
            value: 50,
        }],
        credits: 0,
    };

    setUser(user);

    const expected = {
        equipment: [
            {
                id: 'nunchucks',
                value: 50,
            }],
        credits: 80,
    };

    const weapon = {
        id: 'weapon',
        value: 100,
    };

    sellItem(weapon);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});

test('Test to see if a user buys an item', (expect) => {

    const user = {
        equipment: [{
            id: 'nunchucks',
            value: 50,
        }],
        credits: 120,
    };

    setUser(user);

    const expected = {
        equipment: [
            {
                id: 'nunchucks',
                value: 50,
            }, {
                id: 'weapon',
                value: 100,
            }],
        credits: 0,
    };

    const weapon = {
        id: 'weapon',
        value: 100,
    };

    buyItem(weapon);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});

test('This test should find the key name with the highest value in an object', (expect) => {
    const expected = 'strength';

    const user = {
        age: 18,
        hp: 30,
        credits: 0,
        equipment: [],
        friends: [],
        completedQuests: {},
        intelligence: 2,
        strength: 3,
        marksmanship: 2,
        charisma: 1,
        luck: 2,
    };


    const actual = findHighestStat(user);

    expect.deepEqual(actual, expected);
});
