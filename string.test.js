const {reverseText, emptyText} = require("./string")

describe("reverseText Function:", () => {
    test("return error", () => {
        expect(() => reverseText(1)).toThrow(new Error("Type is not correct"))
    });
    test("Javascript 101 - 101 tpircsavaJ", () => {
        expect(reverseText('Javascript 101')).toBe('101 tpircsavaJ');
    });
});

describe("emptyText Fuction:", () => {
    test("Empty text", () => {
        expect(() => emptyText('')).toThrow("empty string");
    });
});