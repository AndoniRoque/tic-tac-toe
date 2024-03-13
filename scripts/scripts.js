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

function game(cells) {
    let round = 0;    
    const xPlayer = new Player("x", "equis");
    const oPlayer = new Player("o", "circulo");
    

    cells.forEach(cell => {
        cell.isClicked = false;
        cell.addEventListener('click', () =>{
            console.log(round);              
            
            if(round % 2 == 0){
                userInput(gameboard.cells, oPlayer);                
                // console.log("placeMarker", placeMarker(oPlayer, rowInput, colInput));
            } else {
                userInput(gameboard.cells, xPlayer);
                // console.log("placeMarker", placeMarker(xPlayer, rowInput, colInput));
            }
            
            if(winState()) {
                return;
            } else if(round == 9){
                alert("It's a tie!");
                return;
            }
            round++;  
        })
    })
    
        
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
    cells.forEach(cell => {
        if(!cell.isClicked) {
            cell.addEventListener('click', () =>{
                cell.textContent = player.mark;
                return cell;
            })
        }
    });

}


game(gameboard.cells);

