// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rTime = 15000;
let gTime = 30000;
let yTime = 5000;
let swapStateIFNeeded;
let lastSwitchedTime = 0;
let colourstate = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  swapStateIFNeeded();
  showbackground();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
function swapStateIfNeeded() {
  if (millis() > lastSwitchedTime + yTime&& colourstate === 1) {
    drawOutlineOfLights()
    ellipse(width/2, height/2, 50, 50); 
    fill(255,0,0);
    lastSwitchedTime = millis();
    
  }
}
