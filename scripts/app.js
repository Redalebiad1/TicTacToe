let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: '',
        symbol:'X'
    },
    {
        name: '',
        symbol:'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const editPLayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPLayer2BtnElement = document.getElementById('edit-player-2-btn');
const CancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
/* const gameFieldElements = document.querySelectorAll('#game-board li'); */
const gameBoardElement = document.getElementById('game-board');

editPLayer1BtnElement.addEventListener('click', openPlayerConfig);
editPLayer2BtnElement.addEventListener('click', openPlayerConfig);
CancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);


formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);

/* for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click',selectGameField)
} */
gameBoardElement.addEventListener('click', selectGameField);