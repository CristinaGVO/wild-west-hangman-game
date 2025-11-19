const words = [
    "COWBOY",
    "GOLDRUSH",
    "CACTUS",
    "HORSE",
    "DYNAMITE",
    "VEIN",
    "DEPOSIT",
    "SALOON",
    "WAGON",
    "BOOTS",
    "CARRIAGE",
    "COWS",
]; // siempre seran las mismas palabras - array//
const maxWrongGuesses = 5; // variable 5 oportunidades


let secretWord = ''; // variable the secret actual word in the turn - palabra secreta del turno ejm 'cactus'
let displayWord = []; // how we see at the display - array, es el display vacio solo con las lineas
let guessedLetters = []; // array - se guardan las letras que el usuario va presionando
let wrongGuesses = 0; // contamos los errores del jugador, iniciamos por 0

let gameOver = false; // inicia al false, y cambia a true cuando el juego is done (win or lose)
let gameWon = false; //inicia en false, pero cuando el jugador gana se cambia a true

const wordDisplayEl = document.getElementById("wordDisplay"); // conecto estas variables con HTML

const remainingGuessesEl = document.getElementById("remainingGuesses");

const guessedLettersEl = document.getElementById("guessedLetters");

const messageEl = document.getElementById("message");

const keyboardEl = document.getElementById("keyboard");

const playAgainButton = document.getElementById("playAgainButton");

const instructionsButton = document.getElementById("instructionsButton");

const instructionsBox = document.getElementById("instructionsBox");

const letterButtons = document.querySelectorAll(".key"); //conectar los elementos del keyboard

//Creo una función para iniciar el juego se inicia escogiendo la palabra al azar del array words, y se debe llenar el displayWordcon _ (un guion bajo por cada letra)que se reinicie el juego y quede asi: guessedLetters(vacío),wrongGuesses(0)gameOver y gameWon(falso) porque es volver a iniciar.
function startGame() { // extraemos una palabra al azar y en el array secretWord ponemos las lines del index de esa palabra
        const randomIndex = Math.floor(Math.random() * words.length);
            secretWord = words[randomIndex];
              //console.log(startGame);
              // voy a crear un array para que me salgan las lineas por palabra, con el for recorremos cada letra y mete una rayita en el array por el lenght de la palabra seleccionada
            displayWord = [];
        for (let i = 0; i < secretWord.length; i++) {
            displayWord.push("_");
    // console.log(displayWord);
    // restart Game debe estar en 0 y false y el array vacio, es como borrar todo e iniciar de nuevo
            guessedLetters = [];
            wrongGuesses = 0;
            gameOver = false;
            gameWon = false; // no hay ganador
            messageEl.textContent = ""; //queda vacio de nuevo para iniciar de nuevo
}}

function updateScreen() {
  // pantalla estado inicial, nos va a mostrar todos los resultados de cuantas mas oportunidades tiene, letras que ha adivinado
        wordDisplayEl.textContent = displayWord.join(" ");
        remainingGuessesEl.textContent = "Wrong guesses:" + wrongGuesses + " / " + maxWrongGuesses; //se cuentan las veces que hay error en las palabras que va eligiendo
    if (guessedLetters.length === 0) { 
        guessedLettersEl.textContent = "_";
}   else {
        guessedLettersEl.textContent = guessedLetters.join(", ");
}}

function handleGuess(letter) {
    if (gameOver) { // si el juego termino no hacemos nada = verdadero
            return;
}
    if (guessedLetters.includes(letter)) {
            return; //si ya intentamos alguna de esas letras antes, no se repiten las letras
}
            guessedLetters.push(letter); // las agregamos a este array de letras usadas

    if (secretWord.includes(letter)) {
            for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
        //si la letra esta se pone en los espacios correctos de la pantalla,
            displayWord[i] = letter;
}}}       else { 
        wrongGuesses++; // si la letra no esta, sumar un error mas
}
        checkWinOrLoss(); // llamamos esta funcion para ver si el juego termino
updateScreen();
}

letterButtons.forEach((button) => { // recorremos cada letra
    button.addEventListener("click", (event) => {// hacemos click en el botton para
        const pressedLetter = button.textContent; // Obtener la letra del botón
        // Pasar la letra a la función de lógica principal
        // Esta función (handleGuess) debe manejar toda la actualización del juego
        handleGuess(pressedLetter); 
    }); // recorremos cada letra, agregamos addeventlistener, cuando haga click tomamos el atributo(letra) que hay en ese boton,luego llamamos la letra y el boton.
});

function checkWinOrLoss() {
    if (!displayWord.includes('_')) {
        gameWon = true;
        gameOver = true;
        messageEl.textContent = 'Congratulations Cowboy,You win!';
        return; //esta verificacion se hace cuando hay un ganador, se verifica si no hay mas lineas vacias quiere decir que adivino todas las letras.Si no revisa lo siguiente:
    }
    if (wrongGuesses >= maxWrongGuesses) {
        gameOver = true;
        messageEl.textContent = 'Oh Cowboy you lose! Continue playing';
    }
} // aca es si en el anterior if fue no ganadora, entonces verifica este if

playAgainButton.addEventListener('click', function () {
    letterButtons.forEach((button) => {
        button.disabled = false;
        
});
    startGame();
});
startGame();
