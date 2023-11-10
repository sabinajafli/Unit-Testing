const getDateDifference = require('./date');

describe("Date difference:", () => {
    test("date difference should be 1", () => {
        expect(getDateDifference('2023-11-09', '2023-11-10')).toBe(1);
    });
    test("date difference should be 365", () => {
        expect(getDateDifference('2022-01-01', '2023-01-01')).toBe(365);
    })
});