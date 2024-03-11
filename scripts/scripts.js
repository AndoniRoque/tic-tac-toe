function makeAdding(firstNumber) {
    const first = firstNumber;

    return function resulting(secondNumber) {
        const second = secondNumber;
        return first + secondNumber;
    }
}

const add5 = makeAdding(5);

console.log(add5(2));

const name = "Bob";
const age = 28;
const color = "red";

const thatObject = {name: name, age: age, color:color};

console.log(thatObject);

const otherObject = {name, age, color};

console.log(">", otherObject);

console.log("-------------------------------------------");

const obj = {a: 1, b:2};
console.log(obj);
const {a,b} = obj;
console.log(obj);

console.log("-------------------------------------------");

function createUser(name){
    const discordName = "@" + name;

    let reputation = 0;
    const getReptutation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReptutation, giveReputation};
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReptutation()
})

console.log("-------------------------------------------");

function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
}