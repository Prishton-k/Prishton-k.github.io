// Array Notation
// Digdarshan Kc
// Date
//
// Extra for Experts:
 


// Game object to hold properties and methods
let game = {
    secretNumber: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    guesses: [], // Array to store the player's guesses
    maxGuesses: 10, // Maximum number of guesses allowed
  
    // Function to make a guess
    makeGuess: function(guess) {
      this.guesses.push(guess); // Store the guess in the array
      if (this.guesses.length > this.maxGuesses) {
        console.log("You've exceeded the maximum number of guesses!");
        return true; // Indicate game over
      }
      if (guess < this.secretNumber) {
        console.log("Too low! Try again.");
      } else if (guess > this.secretNumber) {
        console.log("Too high! Try again.");
      } else {
        console.log(`Congratulations! You've guessed the number ${this.secretNumber} in ${this.guesses.length} tries.`);
        return true; // Indicate game over
      }
      return false; // Game continues
    },
  
    // Function to display the guesses
    displayGuesses: function() {
      console.log("Your guesses: " + this.guesses.join(", "));
    }
  };
  
  // Main game loop
  function draw() {
    let guess = prompt("Guess a number between 1 and 100 (or type 'exit' to quit):");
    
    if (guess === 'exit') {
     console.log("Thanks for playing!");
      clearInterval(gameInterval); // Stop the game loop
      return; // Exit the function
    }
  
    let parsedGuess = parseInt(guess);
    if (!isNaN(parsedGuess)) {
      let gameOver = game.makeGuess(parsedGuess);
      game.displayGuesses();
  
      // Check if the game is over
      if (gameOver || game.guesses.length >= game.maxGuesses) {
        console.log("Game over! The secret number was: " + game.secretNumber);
        clearInterval(gameInterval); // Stop the game loop
      }
    } else {
      console.log("Please enter a valid number.");
    }
  }
  
  // Call the draw function repeatedly
  let gameInterval = setInterval(draw, 1000);


