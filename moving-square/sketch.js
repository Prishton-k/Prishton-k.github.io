
let x = 200;
let y = 200;
let dx = 2;
let dy = 3;
let radius = 25;
let r = 0;
let g = 0;
let b = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  moveBall();
  bounceBall();
  displayBall();
}

function moveBall() {
  // move
  x = x + dx;
  y = y + dy;
}

function bounceBall() {
  // bounce if needed
  if (x >= width - radius || x <= 0 + radius) {
    dx = dx * -1;
    pickRandomBallColor();
  }
  if (y >= height - radius || y <= 0 + radius) {
    dy = dy * -1;
    pickRandomBallColor();
  }
}

function pickRandomBallColor() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function displayBall() {
  // displaying
  noStroke();
  fill(r, g, b);
  circle(x, y, radius*2);
}
