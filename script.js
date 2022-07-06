
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

var playerOneScore = 0;
var playerTwoScore = 0;
// --------------------------------------------------
// Game Functions
function selectOne() {
    if (gameBoard[0] === 'X') {
    cellOne.style.fontSize = "50px";
    cellOne.textContent = 'X';
    cellOne.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellOne.style.fontSize = "50px";
    cellOne.textContent = 'O';
    cellOne.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectTwo() {
    if (gameBoard[0] === 'X') {
    cellTwo.style.fontSize = "50px";
    cellTwo.textContent = 'X';
    cellTwo.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellTwo.style.fontSize = "50px";
    cellTwo.textContent = 'O';
    cellTwo.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectThree() {
    if (gameBoard[0] === 'X') {
    cellThree.style.fontSize = "50px";
    cellThree.textContent = 'X';
    cellThree.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellThree.style.fontSize = "50px";
    cellThree.textContent = 'O';
    cellThree.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectFour() {
    if (gameBoard[0] === 'X') {
    cellFour.style.fontSize = "50px";
    cellFour.textContent = 'X';
    cellFour.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellFour.style.fontSize = "50px";
    cellFour.textContent = 'O';
    cellFour.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectFive() {
    if (gameBoard[0] === 'X') {
    cellFive.style.fontSize = "50px";
    cellFive.textContent = 'X';
    cellFive.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellFive.style.fontSize = "50px";
    cellFive.textContent = 'O';
    cellFive.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectSix() {
    if (gameBoard[0] === 'X') {
    cellSix.style.fontSize = "50px";
    cellSix.textContent = 'X';
    cellSix.setAttribute('id', 'selected');

    }
    else if (gameBoard[0] === 'O') {
    cellSix.style.fontSize = "50px";
    cellSix.textContent = 'O';
    cellSix.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectSeven() {
    if (gameBoard[0] === 'X') {
    cellSeven.style.fontSize = "50px";
    cellSeven.textContent = 'X';
    cellSeven.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellSeven.style.fontSize = "50px";
    cellSeven.textContent = 'O';
    cellSeven.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectEight() {
    if (gameBoard[0] === 'X') {
    cellEight.style.fontSize = "50px";
    cellEight.textContent = 'X';
    cellEight.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellEight.style.fontSize = "50px";
    cellEight.textContent = 'O';
    cellEight.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
function selectNine() {
    if (gameBoard[0] === 'X') {
    cellNine.style.fontSize = "50px";
    cellNine.textContent = 'X';
    cellNine.setAttribute('id', 'selected');
    }
    else if (gameBoard[0] === 'O') {
    cellNine.style.fontSize = "50px";
    cellNine.textContent = 'O';
    cellNine.setAttribute('id', 'selected');
    }
    gameBoard.shift()
    winner()
}
// --------------------------------------------------
const playerOne = document.querySelector('.playerOneScore');
const playerTwo = document.querySelector('.playerTwoScore');

function winner() {
   if(cellOne.textContent === 'X' && cellTwo.textContent === 'X' && cellThree.textContent === 'X') {
       playerOne.textContent = playerOneScore += 1;
       cellOne.style.backgroundColor = 'pink';
         cellTwo.style.backgroundColor = 'pink';
            cellThree.style.backgroundColor = 'pink';
            gameBoard.length = 0
            setTimeout(reset, 1000);
   } else if (cellOne.textContent === 'O' && cellTwo.textContent === 'O' && cellThree.textContent === 'O') {
    playerTwo.textContent = playerTwoScore += 1;
    cellOne.style.backgroundColor = 'purple';
         cellTwo.style.backgroundColor = 'purple';
            cellThree.style.backgroundColor = 'purple';
            gameBoard.length = 0
            setTimeout(reset, 1000);

   }
    else if (cellFour.textContent === 'X' && cellFive.textContent === 'X' && cellSix.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1; 
        cellFour.style.backgroundColor = 'pink';
            cellFive.style.backgroundColor = 'pink';
                cellSix.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellFour.textContent === 'O' && cellFive.textContent === 'O' && cellSix.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellFour.style.backgroundColor = 'purple';
            cellFive.style.backgroundColor = 'purple';
                cellSix.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellSeven.textContent === 'X' && cellEight.textContent === 'X' && cellNine.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1;
        cellSeven.style.backgroundColor = 'pink';
            cellEight.style.backgroundColor = 'pink';
                cellNine.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellSeven.textContent === 'O' && cellEight.textContent === 'O' && cellNine.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellSeven.style.backgroundColor = 'purple';
            cellEight.style.backgroundColor = 'purple';
                cellNine.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellOne.textContent === 'X' && cellFour.textContent === 'X' && cellSeven.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1;
        cellOne.style.backgroundColor = 'pink';
            cellFour.style.backgroundColor = 'pink';
                cellSeven.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellOne.textContent === 'O' && cellFour.textContent === 'O' && cellSeven.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellOne.style.backgroundColor = 'purple';
            cellFour.style.backgroundColor = 'purple';
                cellSeven.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellTwo.textContent === 'X' && cellFive.textContent === 'X' && cellEight.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1;
        cellTwo.style.backgroundColor = 'pink';
            cellFive.style.backgroundColor = 'pink';
                cellEight.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellTwo.textContent === 'O' && cellFive.textContent === 'O' && cellEight.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellTwo.style.backgroundColor = 'purple';
            cellFive.style.backgroundColor = 'purple';
                cellEight.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellThree.textContent === 'X' && cellSix.textContent === 'X' && cellNine.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1;
        cellThree.style.backgroundColor = 'pink';
            cellSix.style.backgroundColor = 'pink';
                cellNine.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellThree.textContent === 'O' && cellSix.textContent === 'O' && cellNine.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellThree.style.backgroundColor = 'purple';
            cellSix.style.backgroundColor = 'purple';
                cellNine.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellOne.textContent === 'X' && cellFive.textContent === 'X' && cellNine.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1;
        cellOne.style.backgroundColor = 'pink';
            cellFive.style.backgroundColor = 'pink';
                cellNine.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellOne.textContent === 'O' && cellFive.textContent === 'O' && cellNine.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellOne.style.backgroundColor = 'purple';
            cellFive.style.backgroundColor = 'purple';
                cellNine.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }   
    else if (cellThree.textContent === 'X' && cellFive.textContent === 'X' && cellSeven.textContent === 'X') {
        playerOne.textContent = playerOneScore += 1;
        cellThree.style.backgroundColor = 'pink';
            cellFive.style.backgroundColor = 'pink';
                cellSeven.style.backgroundColor = 'pink';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (cellThree.textContent === 'O' && cellFive.textContent === 'O' && cellSeven.textContent === 'O') {
        playerTwo.textContent = playerTwoScore += 1;
        cellThree.style.backgroundColor = 'purple'; 
            cellFive.style.backgroundColor = 'purple';
                cellSeven.style.backgroundColor = 'purple';
                gameBoard.length = 0
                setTimeout(reset, 1000);

    }
    else if (gameBoard.length === 0) {
        alert("No winner!")
        gameBoard.length = 0
        setTimeout(reset, 1000);

    }

}

function reset() {
    gameBoard.push('X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X')
    cellOne.textContent = '';
    cellTwo.textContent = '';
    cellThree.textContent = '';
    cellFour.textContent = '';
    cellFive.textContent = '';
    cellSix.textContent = '';
    cellSeven.textContent = '';
    cellEight.textContent = '';
    cellNine.textContent = '';

    cellOne.style.backgroundColor = 'rgb(106, 106, 179)';
    cellTwo.style.backgroundColor = 'rgb(106, 106, 179)';
    cellThree.style.backgroundColor = 'rgb(106, 106, 179)';
    cellFour.style.backgroundColor = 'rgb(106, 106, 179)';
    cellFive.style.backgroundColor = 'rgb(106, 106, 179)';
    cellSix.style.backgroundColor = 'rgb(106, 106, 179)';
    cellSeven.style.backgroundColor = 'rgb(106, 106, 179)';
    cellEight.style.backgroundColor = 'rgb(106, 106, 179)';
    cellNine.style.backgroundColor = 'rgb(106, 106, 179)';

    cellOne.removeAttribute('id' , 'selected');
    cellTwo.removeAttribute('id' , 'selected');
    cellThree.removeAttribute('id' , 'selected');
    cellFour.removeAttribute('id' , 'selected');
    cellFive.removeAttribute('id' , 'selected');
    cellSix.removeAttribute('id' , 'selected');
    cellSeven.removeAttribute('id' , 'selected');
    cellEight.removeAttribute('id' , 'selected');
    cellNine.removeAttribute('id' , 'selected');

}

