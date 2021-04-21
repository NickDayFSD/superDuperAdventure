import { setUser, getUser, areQuestsCompleted, poistiveUserUpdate, negativeUserUpdate } from '../local-storage-utils.js';

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
    }

    const actual = areQuestsCompleted(user);

    expect.deepEqual(actual, expected);
});


