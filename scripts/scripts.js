let gameboard = createGameboard();


function createGameboard () {
    const gameboard = [["","",""], ["","",""], ["","",""]];
    const cells = document.querySelectorAll('.gameboard div');
    return {gameboard, cells};
}

function Player(mark, name) {
    this.mark = mark;
    this.name = name;
}

function placeMarker(player, row, col) {
    const marker = player.mark;
    gameboard.gameboard[row][col] = marker;
}

function game() {
    let round = 0;    
    const xPlayer = new Player("x", "equis");
    const oPlayer = new Player("o", "circulo");
    
    
    for(let j = 0; j < 3; j++){
        for(let t = 0; t < 3; t++){
            
            round++;     
                
            if(round % 2 == 0){
                userInput(gameboard.cells, oPlayer);                
                // console.log("placeMarker", placeMarker(oPlayer, rowInput, colInput));
            } else {
                userInput(gameboard.cells, xPlayer);
                // console.log("placeMarker", placeMarker(xPlayer, rowInput, colInput));
            }
            
            if(winState()) {
                return;
            }
        }
    }
    
    if(round == 9) {
        alert("It's a tie!");
        return;
    }
        
}


function winState(){
    let won = false;
    for (let i = 0; i < 3; i++) {
        if (gameboard.gameboard[i][0] === gameboard.gameboard[i][1] && gameboard.gameboard[i][1] === gameboard.gameboard[i][2] && gameboard.gameboard[i][0] !== "") {
            won = true;
            alert("Player " + gameboard.gameboard[i][0] + " won!");
            return true;
        }
    }
    
    for (let i = 0; i < 3; i++) {
        if (gameboard.gameboard[0][i] === gameboard.gameboard[1][i] && gameboard.gameboard[1][i] === gameboard.gameboard[2][i] && gameboard.gameboard[0][i] !== "") {
            won = true;
            alert("Player " + gameboard.gameboard[0][i] + " won!");
            return true;
        }
    }
    
    if ((gameboard.gameboard[0][0] === gameboard.gameboard[1][1] && gameboard.gameboard[1][1] === gameboard.gameboard[2][2] && gameboard.gameboard[0][0] !== "") ||
    (gameboard.gameboard[0][2] === gameboard.gameboard[1][1] && gameboard.gameboard[1][1] === gameboard.gameboard[2][0] && gameboard.gameboard[0][2] !== "")) {
        won = true;
        alert("Player " + gameboard.gameboard[1][1] + " won!");
        return true;
    }   
}


function userInput(cells, player){
    console.log(player);
    cells.forEach(cell => {
        cell.addEventListener('click', () =>{
            cell.textContent = player.mark;
            return cell;
        })
    });

}


game();