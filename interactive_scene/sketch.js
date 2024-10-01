let circleColor = 0;
let circleSize = 50;
let shape = 'circle'; // New variable to track the shape


function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(170);
  drawShape();
  handleKeyboardInput();
}

function drawShape() {
  fill(circleColor);
  if (shape === 'circle') {
    ellipse(mouseX, mouseY, 50, 50);
  } else if (shape === 'rect') {
    rect(mouseX - circleSize*2, mouseY - circleSize, circleSize, circleSize);
  } 
}

function handleKeyboardInput() {
  if (keyIsDown(UP_ARROW)) {
    circleSize += 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    circleSize -= 5;
  }
  
  if (key === 'c') {
    noStroke();
    circleColor = color(random(255), random(255), random(255));
  }
  
  if (key === 'ArrowLeft') {
    shape = 'rect';
  } 
  if (key === 'ArrowRight') {
    shape = 'circle';
  }
  }
  
