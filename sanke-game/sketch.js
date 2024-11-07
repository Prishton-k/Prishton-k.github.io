// Snake game
// Digdarshan KC
// 30th Oct 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let snake;
let food;
let gridSize = 20; // Size of each grid cell
let cols, rows;
let score = 0;
let foodColor;
let gameOver = false;

function setup() {
  createCanvas(400, 400);
  frameRate(10); // Initial speed
  cols = floor(width / gridSize);
  rows = floor(height / gridSize);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gridSize);
  // Random color for each food
  foodColor = color(random(255), random(255), random(255));
}

function draw() {
  if (gameOver) {
    background(0);
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2 - 20);
    textSize(16);
    text("Final Score: " + score, width / 2, height / 2 + 20);
    text("Press 'R' to Restart", width / 2, height / 2 + 50);
    return;
  }

  background(220);
  
  snake.update();
  snake.show();
  
  fill(foodColor);
  ellipse(food.x + gridSize / 2, food.y + gridSize / 2, gridSize, gridSize); // Circular food
  
  if (snake.eat(food)) {
    score++;
    frameRate(10 + score * 0.5); // Increase speed as score increases
    foodLocation();
    background(random(255), random(255), random(255)); // Change background color on eating
  }
  
  if (snake.endGame()) {
    gameOver = true;
  }
  
  fill(0);
  textSize(16);
  text("Score: " + score, 10, 20); // Display score
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.ydir === 0) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.ydir === 0) {
    snake.setDir(0, 1);
  } else if (keyCode === LEFT_ARROW && snake.xdir === 0) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW && snake.xdir === 0) {
    snake.setDir(1, 0);
  } else if (key === 'R' || key === 'r') {
    restartGame();
  }
}

function restartGame() {
  score = 0;
  gameOver = false;
  snake = new Snake();
  foodLocation();
  frameRate(10); // Reset speed
}

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(cols / 2), floor(rows / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.growth = 0; // Growth counter to control segments added when eating
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    head.x += this.xdir * gridSize;
    head.y += this.ydir * gridSize;

    // Add the new head to the body
    this.body.push(head);

    // Remove the tail unless the snake is growing
    if (this.growth > 0) {
      this.growth--;
    } else {
      this.body.shift();
    }
  }

  grow() {
    this.growth += 1; // Increase the growth counter
  }

  eat(pos) {
    let head = this.body[this.body.length - 1];
    // Check if head position matches food position
    if (head.x === pos.x && head.y === pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  endGame() {
    let head = this.body[this.body.length - 1];
    // Check wall collision
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
      return true;
    }
    // Check self-collision
    return this.body.slice(0, -1).some(segment => segment.equals(head));
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
    }
  }
}
