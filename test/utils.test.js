import { rollGenerator } from "../utils.js";

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
