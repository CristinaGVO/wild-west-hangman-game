document.addEventListener('DOMContentLoaded', (event) => {

const words = ['cowboy', 'goldrush', 'cactus', 'horse', 'dynamite', 'vein','deposit', 'saloon', 'wagon', 'boots', 'trucks', 'birds'] // siempre seran las. mismas palabras - array//

const maxWrongGuesses = 5; // variable

// check the status of game

let secretWord = ''; // variable the secret actual word in the turn - palabra secreta del turno ejm 'cactus'
let displayWord = [ ]; // how we see at the display - array, es el display vacio solo con las lineas
let guessedLetters = [ ]; // array - se guardan las letras que el usuario va presionando
let wrongGuesses = 0; // contamos los errores del jugador, iniciamos por 0

let gameOver = false; // inicia al false, y cambia a true cuando el juego is done (win or lose)
let gameWon = false; //inicia en false, pero cuando el jugador gana se cambia a true

const wordDisplayEl = document.getElementById('wordDisplay'); // conecto estas variables con HTML

const remainingGuessesEl = document.getElementById('remainingGuesses');

const guessedLettersEl = document.getElementById('guessedLetters');

const messageEl = document.getElementById('message');

const keyboardEl = document.getElementById('keyboard');

const playAgainButton = document.getElementById('playAgainButton');

const instructionsButton = document.getElementById('instructionsButton');

const instructionsBox = document.getElementById('instructionsBox');

//Creo una función para iniciar el juego se inicia escogiendo la palabra al azar del array words, y se debe llenar el displayWordcon _ (un guion bajo por cada letra)que se reinicie el juego y quede asi: guessedLetters(vacío),wrongGuesses(0)gameOver y gameWon(falso) porque es volver a iniciar.
function startGame() {
// extraemos una palabra al azar y en el array secretWord ponemos las lines del index de esa palabra
const randomIndex = Math.floor(Math.random()* words.length);
secretWord = words[randomIndex];

// console.log(startGame);

// voy a crear un array para que me salgan las lineas por palabra, con el for recorremos cada letra y mete una rayita en el array por el lenght de la palabra seleccionada
displayWord = [];
for (let i = 0; i < secretWord.length; i++) {
    displayWord.push('_');
    console.log(displayWord);
    
// restart Game debe estar en 0 y false y el array vacio, es como borrar todo e iniciar de nuevo
guessedLetters =[];
wrongGuesses = 0;
gameOver = false;
gameWon = false; // no hay ganador

messageEl.textContent = ''; //queda vacio de nuevo para iniciar de nuevo

playAgainButton.classList.add('hidden'); //ocultar el boton de play again
updateScreen();
}}
function updateScreen() {
 // pantalla estado inicial, nos va a mostrar todos los resultados de cuantas mas oportunidades tiene, letras que ha adivinado
wordDisplayEl.textContent = displayWord.join(' ');

remainingGuessesEl.textContent = 'Wrong guesses:' + wrongGuesses + ' / ' + maxWrongGuesses; //vamos a contar las veces que hay error en las palabras que va eligiendo
 if ( guessedLetters.length === 0) { guessedLettersEl.textContent = '_';
} else {
    guessedLettersEl.textContent = guessedLetters.join(', '); 
    
    startGame() ;
}
 }});

 


