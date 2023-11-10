const isValidEmail = require('./email');

describe("Check valid email:", () => {
    test("Validate a correct email address", () => {
        expect(isValidEmail('sabina.najafli@gmail.com')).toBe(true);
    });
    test("Incorrect email address", () => {
        expect(isValidEmail("sabina.najafli.gmail")).toBe(false)
    })
});