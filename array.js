function evenNumbers(array) {
    if (!Array.isArray(array)) {
        throw new Error("only array is allowed")
    } else if (array.length === 0) {
        throw new Error("Array cannot be empty");
    } else {
        return array.filter(number => number % 2 == 0);
    }
}

module.exports = evenNumbers;