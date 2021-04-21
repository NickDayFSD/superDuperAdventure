import { rollGenerator, findById, luckRoll, doesUserSatisfyRequirements } from '../utils.js';

const test = QUnit.test;

test('test the roller to pick a number between 1 and 10 and add the attribute stat', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    const result = rollGenerator(2);

    let actual;

    if (result >= 3 && result <= 12) {
        actual = true;
    } else {
        actual = false;
    }
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in an array and ID, return item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const object = [{
        id: 2,
        name: 'jamie'
    },
    {
        id: 8,
        name: 'phil'
    }];

    const expected = {
        id: 8,
        name: 'phil'
    };

    let actual = findById(object, 8);

    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('test luck number of rolls and select the highest roll', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    const result = luckRoll(3, 2);
    let actual;

    if (result >= 3 && result <= 12) {
        actual = true;
    } else {
        actual = false;
    }
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test to determine if the user has the required items to unlock a choice', (expect) => {

    const user = {
        id: 'Chase',
        equipment: [
            {
                id: 'sword',
            }
        ],
        friends: [
            {
                id: 'Sally',
            }
        ],
    };

    const weapon = {
    };

    const expected = true;

    const actual = doesUserSatisfyRequirements(weapon.id, user);
    expect.equal(actual, expected);
});
