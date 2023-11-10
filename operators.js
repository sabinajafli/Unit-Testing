function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
        return a - b;
}

function divide(a,b){
    if (a !== 0 && b === 0) {
        throw new Error("cannot divide by zero");
    } else if (a === 0 && b === 0) {
        throw new Error("invalid");
    } else {
        return a / b;
    }
}

function multiply(a, b) {
    if(a<=0 || b<=0) {
        throw new Error("cannot multiply by zero or negative numbers");
    } else {
        return a * b
    }
}


module.exports = {sum, subtraction, divide, multiply};