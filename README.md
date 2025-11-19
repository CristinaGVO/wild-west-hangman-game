**Wild West Hangman - Game**
A Western-themed version of the classic Hangman game, built with JavaScript, HTML, and CSS.

Wild West Hangman is a simple and fun word-guessing game where the player must uncover a hidden word by selecting letters. You only have 5 wrong guesses, so choose wisely, cowboy! 🌵🤠
---

## Características principales:
Palabra secreta seleccionada al azar
Teclado en pantalla (A–Z)
5 oportunidades de error, se muestran las oportunidades de error y restantes
Se muestran las letras seleccionadas
Mensajes de victoria o derrota
Botón para reiniciar el juego en cualquier momento
Si una letra está repetida en la palabra, todas sus posiciones se revelan automáticamente.
---

## Why I Chose This Project
I chose Wild West Hangman because:
It’s ideal for practicing basic JavaScript logic
It helped me understand arrays, loops, functions, conditionals, and DOM manipulation
It is visually fun and easy to personalize
I strengthened my understanding of how HTML, CSS, and JavaScript work together
---

## live Game
- https://cristinagvo.github.io/wild-west-hangman-game/

- https://tu-usuario.github.io/wild-west-hangman/

## How the Game Works
Click any letter on the on-screen keyboard
If the letter is correct, it appears in the word
If incorrect, you lose one of your 5 chances
Guess the full word before all attempts run out
Press Play Again to restart the game
---

## Pseudo code:
*START GAME*
  Choose a random secretWord from the word list
  Create displayWord with one underscore for each letter in secretWord
  Set wrongGuesses to 0
  Set maxWrongGuesses to a fixed number (for example, 6)
  Set gameOver to false
  Set gameWon to false
  Show displayWord and remaining guesses on the screen

*WHEN PLAYER SELECTS A LETTER:*
  IF gameOver is true:
    Ignore the guess and do nothing

  IF letter has already been guessed:
    Ignore the guess and do nothing

  Add letter to the list of guessedLetters

  IF letter is in secretWord:
    FOR each position i in secretWord:
      IF secretWord[i] equals letter:
        Replace the underscore at displayWord[i] with letter
        (If the letter appears multiple times, reveal all positions)
  ELSE:
    Increase wrongGuesses by 1

  *CHECK FOR WIN:*
    IF displayWord has no underscores:
      Set gameWon to true
      Set gameOver to true
      Show "You win!" message

  *CHECK FOR LOSS:*
    IF wrongGuesses is greater than or equal to maxWrongGuesses:
      Set gameOver to true
      Show "You lose!" message and reveal the secretWord

  *UPDATE THE SCREEN:*
    - current displayWord
    - guessedLetters
    - remaining guesses

 *WHEN PLAYER CLICKS "Play Again" BUTTON:*  Restart the game:
    - Choose a new random secretWord
    - Reset displayWord with underscores
    - Reset guessedLetters
    - Reset wrongGuesses to 0
    - Set gameOver to false
    - Set gameWon to false
    - Update the screen
---

## Resources That Helped Me Build This Project
Calculator lab
Class materials
YouTube tutorials
Google searches
W3Schools (JavaScript arrays)
Accessibility/contrast tools

*Links:*
https://www.youtube.com/watch?v=I3S6B2p-VHg
https://www.w3schools.com/js/js_arrays.asp
https://userway.org/es/comprobador-de-contraste/?fg=000000&bg=ffffff
---


## Game Features
Future Enhancements (Stretch Goals)
Add Western-themed music and sound effects
Win/Loss animations
Difficulty levels (longer words, categories, etc.)
Timer mode / countdown
Add desert illustrations or backgrounds