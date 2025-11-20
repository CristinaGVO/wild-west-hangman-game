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
const maxWrongGuesses = 5; // 5 oportunidades de juego

let secretWord = ""; // guarda la palabra secreta del turno actual ejm 'cactus'
let displayWord = []; //  array, muestra lo que ve el usuario - - o letras
let guessedLetters = []; // array - se guardan las letras que el usuario va presionando
let wrongGuesses = 0; // contamos los errores del jugador, iniciamos por 0

let gameOver = false; // inicia al false, y cambia a true cuando el juego is done (win or lose)
let gameWon = false; //inicia en false, pero cuando el jugador gana se cambia a true

const wordDisplayEl = document.getElementById("wordDisplay"); // conecto estas variables con HTML by ID
const remainingGuessesEl = document.getElementById("remainingGuesses");

const guessedLettersEl = document.getElementById("guessedLetters");

const messageEl = document.getElementById("message");

const keyboardEl = document.getElementById("keyboard");

const playAgainButton = document.getElementById("playAgainButton");

const instructionsButton = document.getElementById("instructionsButton");

const instructionsBox = document.getElementById("instructionsBox");

const letterButtons = document.querySelectorAll(".key"); //conectar los elementos del keyboard

instructionsButton.addEventListener("click", () => {
  instructionsBox.classList.toggle("hidden");
  console.log("Botón de instrucciones encontrado:", instructionsButton);
  console.log("Caja de instrucciones encontrada:", instructionsBox);
});

// el motor del juego, funciona cuando cargamos la pagina por primera vez o cuando pulsamos el botton play 

function startGame() {
  // extraemos una palabra al azar y en el array secretWord ponemos las lines del index de esa palabra
  const randomIndex = Math.floor(Math.random() * words.length);
  secretWord = words[randomIndex];
  //console.log(startGame);
  // se crea un array para que salgan las lineas por palabra, con el for recorremos cada letra y mete una rayita en el array por el lenght de la palabra seleccionada
  displayWord = [];
  for (let i = 0; i < secretWord.length; i++) {
    displayWord.push("_");
  }
  // console.log(displayWord);
  // restart Game debe estar en 0 y false y el array vacio, es como borrar todo e iniciar de nuevo
  guessedLetters = [];
  wrongGuesses = 0;
  gameOver = false;
  gameWon = false; // no hay ganador
  messageEl.textContent = ''; //queda
  //vacio de nuevo para iniciar de nuevo

  updateScreen(); // se actualiza la pantalla de nuevo, queda limpia
}

// pantalla estado inicial,limpia, aca se conecta HTML con JS
function updateScreen() {
//muestra la palabra con espacios
  wordDisplayEl.textContent = displayWord.join(" ");
//contador de errores
  remainingGuessesEl.textContent =
    "Wrong guesses:" + wrongGuesses + " / " + maxWrongGuesses; 
// muestra las letras ya intentadas
  if (guessedLetters.length === 0) {
    guessedLettersEl.textContent = "_";
  } else {
    guessedLettersEl.textContent = guessedLetters.join(", "); // pone las letras juntas, separadas por comas en un array
  }
}

function handleGuess(letter) {
  if (gameOver) {
    // si el juego termino no hacemos nada = verdadero
    return;
  }
  if (guessedLetters.includes(letter)) {
    console.log(`Letter "${letter}" already guessed`);
    return; //si ya intentamos alguna de esas letras antes, no se repiten las letra,ignora el click
  }
  guessedLetters.push(letter); // las agregamos a este array de letras usadas
  console.log(`Checking if secretWord "${secretWord}" includes "${letter}"...`);
  if (secretWord.includes(letter)) {//comprobar si la letra esta en la palabra secreta
    console.log(`Correct! The word DOES contain "${letter}".`);
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === letter) {
        // si es correcto reemplazar los guiones bajos por la letra
        displayWord[i] = letter;
      }
    }
  } else {
    wrongGuesses++; // si la letra no esta, sumar un error mas
    console.log(`Wrong! The word does NOT contain "${letter}".`);
  }
  checkWinOrLoss(); // llamamos esta funcion para ver si el juego termino
  updateScreen();
}

letterButtons.forEach((button) => {
  // recorremos cada letra
  button.addEventListener("click", (event) => {
    // hacemos click en el botton para
    const pressedLetter = button.textContent; // Obtener la letra del botón
    // Pasar la letra a la función de lógica principal
    // Esta función (handleGuess) debe manejar toda la actualización del juego
    handleGuess(pressedLetter);
  }); // recorremos cada letra, agregamos addeventlistener, cuando haga click tomamos el atributo(letra) que hay en ese boton,luego llamamos la letra y el boton.
});

function checkWinOrLoss() {
  if (!displayWord.includes("_")) { //si ya no quedan mas guiones bajos disponibles
    gameWon = true;
    gameOver = true;
    messageEl.textContent = "Congratulations Cowboy,You win!";
    return; //esta verificacion se hace cuando hay un ganador, se verifica si no hay mas lineas vacias quiere decir que adivino todas las letras.Si no revisa lo siguiente:
  }
  if (wrongGuesses >= maxWrongGuesses) {
    gameOver = true;
    messageEl.textContent = "Oh Cowboy you lose! Continue playing";
  }
} // aca es si en el anterior if fue no ganadora, entonces verifica este if

playAgainButton.addEventListener("click", function () {
  // Activar todos los botones del teclado
  letterButtons.forEach((button) => {
    button.disabled = false;
  });
  startGame(); // Reiniciar juego
});

startGame();
