
// --------------------------------------------------
// Game Board Logic
let gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
// --------------------------------------------------
// Event Listeners
const cellOne = document.querySelector('.cellOne');
cellOne.addEventListener('click', selectOne);

const cellTwo = document.querySelector('.cellTwo');
cellTwo.addEventListener('click', selectTwo);

const cellThree = document.querySelector('.cellThree');
cellThree.addEventListener('click', selectThree);

const cellFour = document.querySelector('.cellFour');
cellFour.addEventListener('click', selectFour);

const cellFive = document.querySelector('.cellFive');
cellFive.addEventListener('click', selectFive);

const cellSix = document.querySelector('.cellSix');
cellSix.addEventListener('click', selectSix);

const cellSeven = document.querySelector('.cellSeven');
cellSeven.addEventListener('click', selectSeven);

const cellEight = document.querySelector('.cellEight');
cellEight.addEventListener('click', selectEight);

const cellNine = document.querySelector('.cellNine');
cellNine.addEventListener('click', selectNine);
// --------------------------------------------------
// Player Objects
// let playerOne = {
//     name: 'Player One',
//     score: document.querySelector('playerOneScore').textContent,
//     symbol: 'X',
    
// }
// --------------------------------------------------
// Game Functions
function selectOne() {
    if (gameBoard[0] === 'X') {
    cellOne.style.fontSize = "50px";
    cellOne.textContent = 'X';
    cellOne.style.pointerEvents = 'none';
    cellOne.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellOne.style.fontSize = "50px";
    cellOne.textContent = 'O';
    cellOne.style.pointerEvents = 'none';
    cellOne.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectTwo() {
    if (gameBoard[0] === 'X') {
    cellTwo.style.fontSize = "50px";
    cellTwo.textContent = 'X';
    cellTwo.style.pointerEvents = 'none';
    cellTwo.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellTwo.style.fontSize = "50px";
    cellTwo.textContent = 'O';
    cellTwo.style.pointerEvents = 'none';
    cellTwo.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectThree() {
    if (gameBoard[0] === 'X') {
    cellThree.style.fontSize = "50px";
    cellThree.textContent = 'X';
    cellThree.style.pointerEvents = 'none';
    cellThree.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellThree.style.fontSize = "50px";
    cellThree.textContent = 'O';
    cellThree.style.pointerEvents = 'none';
    cellThree.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectFour() {
    if (gameBoard[0] === 'X') {
    cellFour.style.fontSize = "50px";
    cellFour.textContent = 'X';
    cellFour.style.pointerEvents = 'none';
    cellFour.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellFour.style.fontSize = "50px";
    cellFour.textContent = 'O';
    cellFour.style.pointerEvents = 'none';
    cellFour.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectFive() {
    if (gameBoard[0] === 'X') {
    cellFive.style.fontSize = "50px";
    cellFive.textContent = 'X';
    cellFive.style.pointerEvents = 'none';
    cellFive.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellFive.style.fontSize = "50px";
    cellFive.textContent = 'O';
    cellFive.style.pointerEvents = 'none';
    cellFive.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectSix() {
    if (gameBoard[0] === 'X') {
    cellSix.style.fontSize = "50px";
    cellSix.textContent = 'X';
    cellSix.style.pointerEvents = 'none';
    cellSix.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellSix.style.fontSize = "50px";
    cellSix.textContent = 'O';
    cellSix.style.pointerEvents = 'none';
    cellSix.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectSeven() {
    if (gameBoard[0] === 'X') {
    cellSeven.style.fontSize = "50px";
    cellSeven.textContent = 'X';
    cellSeven.style.pointerEvents = 'none';
    cellSeven.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellSeven.style.fontSize = "50px";
    cellSeven.textContent = 'O';
    cellSeven.style.pointerEvents = 'none';
    cellSeven.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectEight() {
    if (gameBoard[0] === 'X') {
    cellEight.style.fontSize = "50px";
    cellEight.textContent = 'X';
    cellEight.style.pointerEvents = 'none';
    cellEight.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellEight.style.fontSize = "50px";
    cellEight.textContent = 'O';
    cellEight.style.pointerEvents = 'none';
    cellEight.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectNine() {
    if (gameBoard[0] === 'X') {
    cellNine.style.fontSize = "50px";
    cellNine.textContent = 'X';
    cellNine.style.pointerEvents = 'none';
    cellNine.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellNine.style.fontSize = "50px";
    cellNine.textContent = 'O';
    cellNine.style.pointerEvents = 'none';
    cellNine.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
// --------------------------------------------------

function winner() {
   if(cellOne.textContent === 'X' && cellTwo.textContent === 'X' && cellThree.textContent === 'X') {
       alert('Player One Wins!');
       cellOne.style.backgroundColor = 'green';
         cellTwo.style.backgroundColor = 'green';
            cellThree.style.backgroundColor = 'green';
   } else if (cellOne.textContent === 'O' && cellTwo.textContent === 'O' && cellThree.textContent === 'O') {
       alert('Player Two Wins!');
       cellOne.style.backgroundColor = 'green';
         cellTwo.style.backgroundColor = 'green';
            cellThree.style.backgroundColor = 'green';
   }
    else if (cellFour.textContent === 'X' && cellFive.textContent === 'X' && cellSix.textContent === 'X') {
         alert('Player One Wins!');
         cellFour.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellSix.style.backgroundColor = 'green';
    }
    else if (cellFour.textContent === 'O' && cellFive.textContent === 'O' && cellSix.textContent === 'O') {
        alert('Player Two Wins!');
        cellFour.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellSix.style.backgroundColor = 'green';
    }
    else if (cellSeven.textContent === 'X' && cellEight.textContent === 'X' && cellNine.textContent === 'X') {
        alert('Player One Wins!');
        cellSeven.style.backgroundColor = 'green';
            cellEight.style.backgroundColor = 'green';
                cellNine.style.backgroundColor = 'green';
    }
    else if (cellSeven.textContent === 'O' && cellEight.textContent === 'O' && cellNine.textContent === 'O') {
        alert('Player Two Wins!');
        cellSeven.style.backgroundColor = 'green';
            cellEight.style.backgroundColor = 'green';
                cellNine.style.backgroundColor = 'green';
    }
    else if (cellOne.textContent === 'X' && cellFour.textContent === 'X' && cellSeven.textContent === 'X') {
        alert('Player One Wins!');
        cellOne.style.backgroundColor = 'green';
            cellFour.style.backgroundColor = 'green';
                cellSeven.style.backgroundColor = 'green';
    }
    else if (cellOne.textContent === 'O' && cellFour.textContent === 'O' && cellSeven.textContent === 'O') {
        alert('Player Two Wins!');
        cellOne.style.backgroundColor = 'green';
            cellFour.style.backgroundColor = 'green';
                cellSeven.style.backgroundColor = 'green';
    }
    else if (cellTwo.textContent === 'X' && cellFive.textContent === 'X' && cellEight.textContent === 'X') {
        alert('Player One Wins!');
        cellTwo.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellEight.style.backgroundColor = 'green';
    }
    else if (cellTwo.textContent === 'O' && cellFive.textContent === 'O' && cellEight.textContent === 'O') {
        alert('Player Two Wins!');
        cellTwo.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellEight.style.backgroundColor = 'green';
    }
    else if (cellThree.textContent === 'X' && cellSix.textContent === 'X' && cellNine.textContent === 'X') {
        alert('Player One Wins!');
        cellThree.style.backgroundColor = 'green';
            cellSix.style.backgroundColor = 'green';
                cellNine.style.backgroundColor = 'green';
    }
    else if (cellThree.textContent === 'O' && cellSix.textContent === 'O' && cellNine.textContent === 'O') {
        alert('Player Two Wins!');
        cellThree.style.backgroundColor = 'green';
            cellSix.style.backgroundColor = 'green';
                cellNine.style.backgroundColor = 'green';
    }
    else if (cellOne.textContent === 'X' && cellFive.textContent === 'X' && cellNine.textContent === 'X') {
        alert('Player One Wins!');
        cellOne.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellNine.style.backgroundColor = 'green';
    }
    else if (cellOne.textContent === 'O' && cellFive.textContent === 'O' && cellNine.textContent === 'O') {
        alert('Player Two Wins!');
        cellOne.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellNine.style.backgroundColor = 'green';
    }   
    else if (cellThree.textContent === 'X' && cellFive.textContent === 'X' && cellSeven.textContent === 'X') {
        alert('Player One Wins!');
        cellThree.style.backgroundColor = 'green';
            cellFive.style.backgroundColor = 'green';
                cellSeven.style.backgroundColor = 'green';
    }
    else if (cellThree.textContent === 'O' && cellFive.textContent === 'O' && cellSeven.textContent === 'O') {
        alert('Player Two Wins!');
        cellThree.style.backgroundColor = 'green'; 
            cellFive.style.backgroundColor = 'green';
                cellSeven.style.backgroundColor = 'green';
    }
    else if (gameBoard.length === 0) {
        alert("No winner!")
    }

}
