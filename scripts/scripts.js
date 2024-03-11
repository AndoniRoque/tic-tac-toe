function createaGameboard () {
    return new Array(9);
}

console.log(createaGameboard());

function Player(mark, name) {
    this.mark = mark;
    this.name = name;
}

const xPlayer = new Player("x", "equis");

const oPlayer = new Player("o", "circulo");

// console.log(xPlayer);
// console.log(oPlayer);

function turn(player){
    return player.mark == "x" ? oPlayer : xPlayer;
}

console.log(turn(oPlayer));

function winState(gameboard) {
    // ??? 
}