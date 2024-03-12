function createaGameboard () {
    const gameboard = [["", "",""], ["","",""], ["","",""]]
    return gameboard;
}

let gameboard = createaGameboard();
console.log("Tablero", gameboard);

function Player(mark, name) {
    this.mark = mark;
    this.name = name;
}

const xPlayer = new Player("x", "equis");

const oPlayer = new Player("o", "circulo");

console.log("Jugador X: ", xPlayer);
console.log("Jugador 0: ", oPlayer);

function turn(player){
    return player.mark == "x" ? oPlayer : xPlayer;
}

function placeMarker(player, row, col) {
    const marker = player.mark;
    gameboard[row][col] = (marker);
    return gameboard; 
}

let round = 0;

function game() {
    for(let j = 0; j < 3; j++){
        for(let t = 0; t < 3; t++){
            round++;
            let rowInput = prompt("inserte fila donde quiere jugar");
            let colInput = prompt("inserte columna donde quiere jugar");
            if(round % 2 == 0){
                console.log("placeMarker", placeMarker(oPlayer, rowInput, colInput));
            } else {
                console.log("placeMarker", placeMarker(xPlayer, rowInput, colInput));
            }
            // winState();
        }
    }
}

// function winState(){
//     let won = false;
//     gameboard.forEach(row => {
//         if(row[0] == "x" && row[1] == "x" && row[2] == "x"){
//             won = true;
//             alert("won!")
//         }        
//     });
// }




    
