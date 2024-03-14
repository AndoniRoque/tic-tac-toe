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
            if (!cell.textContent) {
                if (round % 2 === 0) {
                    cell.textContent = "x";
                    let coordinates = getCoordinates(cell.id);
                    placeMarker(xPlayer, coordinates.row, coordinates.col);
                } else {
                    cell.textContent = "o";
                    let coordinates = getCoordinates(cell.id);
                    placeMarker(oPlayer, coordinates.row, coordinates.col);
                }
                round++;  

                if (winState()) {
                    // Handle win state
                } else if (round === 9) {
                    alert("It's a tie!");
                }
            } else {
                alert("Cell already used!");
            }
        })
    })        
}

function winState() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (gameboard.gameboard[row][0] !== "" && gameboard.gameboard[row][0] === gameboard.gameboard[row][1] && gameboard.gameboard[row][1] === gameboard.gameboard[row][2]) {
            console.log(gameboard);
            alert("Player " + gameboard.gameboard[row][0] + " won!");
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (gameboard.gameboard[0][col] !== "" && gameboard.gameboard[0][col] === gameboard.gameboard[1][col] && gameboard.gameboard[1][col] === gameboard.gameboard[2][col]) {
            console.log("gameboard.gameboard[0][col]", gameboard.gameboard[0][col]);
            alert("Player " + gameboard.gameboard[0][col] + " won!");
            return true;
        }
    }

    // Check diagonals
    if ((gameboard.gameboard[0][0] !== "" && gameboard.gameboard[0][0] === gameboard.gameboard[1][1] && gameboard.gameboard[1][1] === gameboard.gameboard[2][2]) ||
        (gameboard.gameboard[0][2] !== "" && gameboard.gameboard[0][2] === gameboard.gameboard[1][1] && gameboard.gameboard[1][1] === gameboard.gameboard[2][0])) {
        console.log("gameboard.gameboard[0][0]", gameboard.gameboard[0][0]);
        alert("Player " + gameboard.gameboard[1][1] + " won!");
        return true;
    }

    return false; // Return false if no winner
}

function getCoordinates(id) {
    switch (id) {
        case "zeroZero":
            return { row: 0, col: 0 };
        case "zeroOne":
            return { row: 0, col: 1 };
        case "zeroTwo":
            return { row: 0, col: 2 };
        case "oneZero":
            return { row: 1, col: 0 };
        case "oneOne":
            return { row: 1, col: 1 };
        case "oneTwo":
            return { row: 1, col: 2 };
        case "twoZero":
            return { row: 2, col: 0 };
        case "twoOne":
            return { row: 2, col: 1 };
        case "twoTwo":
            return { row: 2, col: 2 };
        default:
            return null;
    }
}


game(gameboard.cells);

