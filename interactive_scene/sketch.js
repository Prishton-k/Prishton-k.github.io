// State variables
let circleSize = 50;
let circleColor = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(255);
  drawCircle();
  handleKeyboardInput();
}

function drawCircle() {
  // Circle follows the mouse
  fill(circleColor);
  ellipse(mouseX, mouseY, circleSize, circleSize);
}

function handleKeyboardInput() {
  // Change circle size based on keyboard input
  if (keyIsDown(UP_ARROW)) {
    circleSize += 1;
  } else if (keyIsDown(DOWN_ARROW)) {
    circleSize -= 1;
  }
  
  // Change circle color based on keyboard input
  if (keyIsDown('r')) {
    circleColor = 255;
  } else if (keyIsDown('b')) {
    circleColor = 0;
  }
}

