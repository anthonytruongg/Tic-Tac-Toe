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
// Game Functions

const selected = document.getElementById('#selected');
selected.addEventListener('click', alert)

function alert() {
    alert('You have selected a cell already!');
}
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
}
function selectTwo() {
    if (gameBoard[0] === 'X') {
    cellTwo.style.fontSize = "50px";
    cellTwo.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellTwo.style.fontSize = "50px";
    cellTwo.textContent = 'O';
    }
    gameBoard.shift()
}
function selectThree() {
    if (gameBoard[0] === 'X') {
    cellThree.style.fontSize = "50px";
    cellThree.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellThree.style.fontSize = "50px";
    cellThree.textContent = 'O';
    }
    gameBoard.shift()
}
function selectFour() {
    if (gameBoard[0] === 'X') {
    cellFour.style.fontSize = "50px";
    cellFour.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellFour.style.fontSize = "50px";
    cellFour.textContent = 'O';
    }
    gameBoard.shift()
}
function selectFive() {
    if (gameBoard[0] === 'X') {
    cellFive.style.fontSize = "50px";
    cellFive.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellFive.style.fontSize = "50px";
    cellFive.textContent = 'O';
    }
    gameBoard.shift()
}
function selectSix() {
    if (gameBoard[0] === 'X') {
    cellSix.style.fontSize = "50px";
    cellSix.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellSix.style.fontSize = "50px";
    cellSix.textContent = 'O';
    }
    gameBoard.shift()
}
function selectSeven() {
    if (gameBoard[0] === 'X') {
    cellSeven.style.fontSize = "50px";
    cellSeven.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellSeven.style.fontSize = "50px";
    cellSeven.textContent = 'O';
    }
    gameBoard.shift()
}
function selectEight() {
    if (gameBoard[0] === 'X') {
    cellEight.style.fontSize = "50px";
    cellEight.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellEight.style.fontSize = "50px";
    cellEight.textContent = 'O';
    }
    gameBoard.shift()
}
function selectNine() {
    if (gameBoard[0] === 'X') {
    cellNine.style.fontSize = "50px";
    cellNine.textContent = 'X';
    }
    else if (gameBoard[0] === 'O') {
    cellNine.style.fontSize = "50px";
    cellNine.textContent = 'O';
    }
    gameBoard.shift()
}
// --------------------------------------------------
