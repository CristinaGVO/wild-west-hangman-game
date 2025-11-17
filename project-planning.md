** Hangman - Wild West Game

On the screen are dashes, each representing a hidden random word. 
The player must guess the word letter by letter. If the word contains two identical letters, they will appear simultaneously. There is a limited number of attempts allowed. A win or loss message will be displayed; guessing the entire word results in a win, while running out of attempts results in a loss. The "Play Again" button restarts the game.

Pseudo code:

START GAME
  Choose a random secretWord from the word list
  Create displayWord with one underscore for each letter in secretWord
  Set wrongGuesses to 0
  Set maxWrongGuesses to a fixed number (for example, 6)
  Set gameOver to false
  Set gameWon to false
  Show displayWord and remaining guesses on the screen

WHEN PLAYER SELECTS A LETTER:
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

  CHECK FOR WIN:
    IF displayWord has no underscores:
      Set gameWon to true
      Set gameOver to true
      Show "You win!" message

  CHECK FOR LOSS:
    IF wrongGuesses is greater than or equal to maxWrongGuesses:
      Set gameOver to true
      Show "You lose!" message and reveal the secretWord

  Update the screen with:
    - current displayWord
    - guessedLetters
    - remaining guesses

WHEN PLAYER CLICKS "Play Again" BUTTON:
  Restart the game:
    - Choose a new random secretWord
    - Reset displayWord with underscores
    - Reset guessedLetters
    - Reset wrongGuesses to 0
    - Set gameOver to false
    - Set gameWon to false
    - Update the screen

IDEAS PARA EL DISENO WEB

Quiero poner las instrucciones en un boton aparte que al presionar, ese boton me muestre las instrucciones de juego

Que cada que le toque el turno a un jugador aparezca es el turno del siguiente
Que haya todo el tiempo sonido de la wild west, y cuando alguien gane que salga un anuncio has ganado
