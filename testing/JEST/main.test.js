// testing JEST/main.test.js
const { sum, multiply, divide, subtract } = require('./main');

/*
test syntax:
test('description of the test', () => {
    // code to test
    expect(actualValue).toBe(expectedValue);
});
*/

// Test suite for arithmetic functions
describe('Arithmetic Functions', () => {
    test('sum adds two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
    });

    test('multiply multiplies two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 5)).toBe(-5);
        expect(multiply(0, 100)).toBe(0);
    });

    test('divide divides two numbers correctly', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, -3)).toBe(2);
        expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
    });

    test('subtract subtracts two numbers correctly', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(-1, -1)).toBe(0);
        expect(subtract(0, 5)).toBe(-5);
    });
});
// To run the tests, use the command: npm test
// change the package.json file to include "test": "jest" in the scripts section
// This will allow you to run the tests using the command `npm test` in your terminal.