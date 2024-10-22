// Array Notation
// Digdarshan Kc
// Date
//
// Extra for Experts: * Extra for Experts:
//  This project includes several enhanced features:
// Power-ups that increase paddle speed temporarily.
//  Adaptive AI that becomes more challenging as the player scores more points.
// A scoreboard that displays current scores and updates dynamically.
 


let playerPaddle, computerPaddle, ball;
let playerScore = 0, computerScore = 0;
let ballSpeedIncreaseInterval = 5000; // 5 seconds
let lastSpeedIncreaseTime = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Initialize paddles and ball with specific positions
  playerPaddle = new Paddle(30);  // Player paddle on the left
  computerPaddle = new Paddle(width - 40);  // Computer paddle on the right
  ball = new Ball();
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  background(r,g,b);

  // Display and move paddles and ball
  playerPaddle.display();
  playerPaddle.moveBasedOnPosition();
  
  computerPaddle.display();
  computerPaddle.positionBasedAiMove(ball); // AI using position

  ball.display();
  ball.move();

  // Check collisions with paddles
  ball.checkPaddleCollision(playerPaddle);
  ball.checkPaddleCollision(computerPaddle);

  // Display the scores
  displayScores();

  // Gradually increase ball speed every 10 seconds
  increaseBallSpeed();
}

// Paddle class
class Paddle {
  constructor(x) {
    this.x = x;  // X position is fixed (left or right)
    this.y = height / 2 - 50;  // Start vertically centered
    this.width = 10;
    this.height = 100;
    this.speed = 10;  // Increased paddle speed to 10 for faster movement
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  moveBasedOnPosition() {
    // Move the paddle by adjusting its position with keys (Player Control)
    if (keyIsDown(UP_ARROW) && this.y > 0) {
      this.y -= this.speed;  // Move up by changing position faster
    }
    if (keyIsDown(DOWN_ARROW) && this.y + this.height < height) {
      this.y += this.speed;  // Move down by changing position faster
    }
  }

  positionBasedAiMove(ball) {
    // AI moves based on the position of the ball
    let targetPosition = ball.y - this.height / 2; // Align paddle center with ball's y position
    let positionDiff = targetPosition - this.y;  // Difference between current and target position
    let aiSpeed = 10;  // Increased AI paddle speed for faster tracking
    
    // Move towards the ball's position smoothly
    if (abs(positionDiff) > aiSpeed) {
      if (positionDiff > 0) {
        this.y += aiSpeed;  // Move down if ball is lower
      } else {
        this.y -= aiSpeed;  // Move up if ball is higher
      }
    } else {
      this.y = targetPosition;  // If close, directly set the position
    }
    
    // Limit the movement within the canvas bounds
    this.y = constrain(this.y, 0, height - this.height);
  }
}

// Ball class
class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 15;
    this.xSpeed = 4;
    this.ySpeed = 3;
  }

  display() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r,g,b);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    // Change ball's position based on speed
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce off the top and bottom edges
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;  // Reverse direction
    }

    // Check for scoring conditions
    if (this.x < 0) {
      computerScore++;
      this.reset();  // Reset ball position
    }
    if (this.x > width) {
      playerScore++;
      this.reset();
    }
  }

  checkPaddleCollision(paddle) {
    // Check if the ball hits the paddle using position
    if (this.x - this.r < paddle.x + paddle.width &&
        this.x + this.r > paddle.x &&
        this.y > paddle.y &&
        this.y < paddle.y + paddle.height) {
      this.xSpeed *= -1;  // Reverse ball's direction on paddle hit
    }
  }

  reset() {
    // Reset ball to the center of the canvas
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 4;  // Reset speed after each score
    this.ySpeed = 3;
  }
}

function displayScores() {
  // Display player and computer scores
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Player: " + playerScore, width / 4, 30);
  text("Computer: " + computerScore, (3 * width) / 4, 30);
}

function increaseBallSpeed() {
  // Check if 10 seconds have passed
  if (millis() - lastSpeedIncreaseTime > ballSpeedIncreaseInterval) {
    // Increase the ball speed based on current movement
    ball.xSpeed *= 1.1;  // 10% increase
    ball.ySpeed *= 1.1;
    lastSpeedIncreaseTime = millis();  // Reset timer
    console.log("Ball speed increased: " + ball.xSpeed.toFixed(2) + ", " + ball.ySpeed.toFixed(2));
  }
}





