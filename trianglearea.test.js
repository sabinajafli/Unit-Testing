const triangleArea = require('./trianglearea');

describe("area of triangle:", () => {
    test('tringle area should be 6', () => {
        expect(triangleArea(3, 4, 5)).toBe(6);
    });

    test('triangle area to be close to 20.33', () => {
        expect(triangleArea(6, 7, 8)).toBeCloseTo(20.33, 2);
    });

    test('return error', () => {
        expect(triangleArea(6, 7, 0)).toBe(NaN);
    })
})