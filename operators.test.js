const {sum, subtraction, divide, multiply} = require('./operators.js');

describe("Sum function:", () => {
    test('1 + 2 to be 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
});

describe("Subtraction function:", () => {
    test('3 - (-4)  to be 7', () => {
        expect(subtraction(3, -4)).toBe(7);
    });
});

describe('Divide function',() => {
    test("return error",()=>{
        expect(() => divide(0,0)).toThrow(new Error('invalid'));
    });
    test("15 / 5 equel to 3", () => {
        expect(divide(15,5)).toBe(3);
    })
});

describe('Multiply function:', () => {
    test("return error", () => {
        expect(() => multiply(5, 0)).toThrow("cannot multiply by zero or negative numbers")
    });
    test("20 * 5 equel to 100", () => {
        expect(multiply(20,5)).toBe(100);
    })
})

