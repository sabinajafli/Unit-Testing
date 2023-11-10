const evenNumbers = require('./array.js');

describe("Even number function:", () => {
    test("[3, 6, 8, 9, 10, 12] to be [6, 8, 10, 12]", () => {
        expect(evenNumbers([3, 6, 8, 9, 10, 12])).toEqual([6, 8, 10, 12])
    });
    test('Not an array', () => {
        expect(() => evenNumbers(2, 4)).toThrow('only array is allowed');
    });
    test('Empty array', () => {
        expect(() => evenNumbers([])).toThrow(Error('Array cannot be empty'));
    })
})