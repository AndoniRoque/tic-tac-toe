function createGameboard () {
    const gameboard = [["","",""], ["","",""], ["","",""]];

    const cells = document.querySelectorAll('.gameboard div');

    
    return {gameboard, cells};
}

function Player(mark, name) {
    this.mark = mark;
    this.name = name;
}

function turn(player){
    return player.mark == "x" ? oPlayer : xPlayer;
}

function placeMarker(player, row, col) {
    const marker = player.mark;
    gameboard[row][col] = (marker);
    return gameboard; 
}

function game() {
    let round = 0;
    
    const xPlayer = new Player("x", "equis");
    const oPlayer = new Player("o", "circulo");
    
    
    for(let j = 0; j < 3; j++){
        for(let t = 0; t < 3; t++){
            
            round++;
            
            // let rowInput = prompt("inserte fila donde quiere jugar");
            // let colInput = prompt("inserte columna donde quiere jugar");
            
            if(round % 2 == 0){
                console.log("placeMarker", placeMarker(oPlayer, rowInput, colInput));
            } else {
                console.log("placeMarker", placeMarker(xPlayer, rowInput, colInput));
            }
            
            if(winState()) {
                return;
            }
        }
    }
    
    alert("It's a tie!");
    return;
}


function winState(){
    let won = false;
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] === gameboard[i][1] && gameboard[i][1] === gameboard[i][2] && gameboard[i][0] !== "") {
            won = true;
            alert("Player " + gameboard[i][0] + " won!");
            return true;
        }
    }
    
    for (let i = 0; i < 3; i++) {
        if (gameboard[0][i] === gameboard[1][i] && gameboard[1][i] === gameboard[2][i] && gameboard[0][i] !== "") {
            won = true;
            alert("Player " + gameboard[0][i] + " won!");
            return true;
        }
    }
    
    if ((gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2] && gameboard[0][0] !== "") ||
    (gameboard[0][2] === gameboard[1][1] && gameboard[1][1] === gameboard[2][0] && gameboard[0][2] !== "")) {
        won = true;
        alert("Player " + gameboard[1][1] + " won!");
        return true;
    }   
}


function userInput(cells){
    cells.forEach(cell => {
        cell.addEventListener('click', () =>{
            console.log("click on", cell.id);
        })
    });

}


let gameboard = createGameboard();
userInput(createGameboard().cells);

game();