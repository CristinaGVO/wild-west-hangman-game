const words = ['cowboy', 'goldrush', 'cactus', 'horse', 'dynamite', 'vein','deposit', 'saloon', 'wagon', 'boots', 'trucks', 'birds'] // siempre seran las. mismas palabras - array//

const maxWrongGuesses = 5; // variable

// check the status of game

let secretWord = ' '; // variable the secret actual word in the turn - palabra secreta del turno ejm 'cactus'
let displayWord = [ ]; // how we see at the display - array, es el display vacio solo con las lineas
let guessedLetters = [ ]; // array - se guardan las letras que el usuario va presionando
let wrongGuesses = 0; // contamos los errores del jugador, iniciamos por 0
let gameOver = false; // inicia al false, true cuando el juego is done (win or lose)
let gameWon = false; //inicia en false, pero cuando el jugador gana es true

const wordDisplayEl = document.getElementById('wordDisplay'); // conecto estas variables con HTML

const remainingGuessesEl = document.getElementById('remainingGuesses');

const guessedLettersEl = document.getElementById('guessedLetters');

const messageEl = document.getElementById('message');

const keyBoardEl = document.getElementById('keyboard');

const playAgainbutton = document.getElementById('playAgainbutton');






