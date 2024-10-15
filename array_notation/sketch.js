// Array Notation
// Digdarshan Kc
// Date
//
// Extra for Experts:
const gameContainer = document.getElementById('game-container');
const ball = document.getElementById('ball');
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');

// Set the initial ball direction and speed
let ballDirectionX = 2;
let ballDirectionY = 2;
let ballSpeed = 5;
// Set the initial paddle positions
let paddle1Y = 150;
let paddle2Y = 150;

// Set the score
let score1 = 0;
let score2 = 0;

// Set the color arrays
const backgroundColors = ['#ff69b4', '#33cc33', '#6666ff', '#ffff66', '#0099cc'];
const ballColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

// Function to update the game state
function updateGameState() {
  // Update the ball position
  ball.style.top = `${ball.offsetTop + ballDirectionY}px`;
  ball.style.left = `${ball.offsetLeft + ballDirectionX}px`;

  // Check for collisions with the paddles
  if (checkCollision(paddle1)) {
    ballDirectionX = -ballDirectionX;
  } else if (checkCollision(paddle2)) {
    ballDirectionX = -ballDirectionX;  
  }

  // Check for collisions with the walls
  if (ball.offsetTop <= 0 || ball.offsetTop + 20 >= gameContainer.offsetHeight) {
    ballDirectionY = -ballDirectionY;
  }

  // Check for goals
  if (ball.offsetLeft <= 0) {
    score2++;
    resetBall();
  } else if (ball.offsetLeft + 20 >= gameContainer.offsetWidth) 
    {    score1++;
    resetBall();
  }

  // Update the score
  document.getElementById('score').innerHTML = `Score: ${score1} - ${score2}`;

  // Update the background and ball colors
  gameContainer.style.backgroundColor = getRandomColor(backgroundColors);
  ball.style.backgroundColor = getRandomColor(ballColors);
}

// Function to check for collisions with the paddles
function checkCollision(paddle) {
  if (ball.offsetTop + 20 > paddle.offsetTop &&
      ball.offsetTop < paddle.offsetTop + 100 &&
      ball.offsetLeft + 20 > paddle.offsetLeft &&
      ball.offsetLeft < paddle.offsetLeft + 10) {
    return true;
  }
  return false;
}

// Function to reset the ball
function resetBall() {
  ball.style.top = '50%';
  ball.style.left = '50%';
  ballDirectionX = 2;
  ballDirectionY = 2;
}

// Function to get a random color from an array
function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Main game loop
setInterval(updateGameState, 16); // 16ms = 60fps

// Add event listeners for paddle movement
document.addEventListener('keydown'), (event) => {
  if (event.key === 'w') {
    paddle1Y -= 10;
    paddle1.style.top = `${paddle1Y}px`;
  }
}

