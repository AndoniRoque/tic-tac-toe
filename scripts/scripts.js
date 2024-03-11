function makeAdding(firstNumber) {
    const first = firstNumber;

    return function resulting(secondNumber) {
        const second = secondNumber;
        return first + secondNumber;
    }
}

const add5 = makeAdding(5);

console.log(add5(2));