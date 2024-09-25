// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lightState = "green";
let lastTimeSwitched = 0;
const GREEN_LIGHT_DURATION = 30000;
const YELLOW_LIGHT_DURATION = 1000;
const RED_LIGHT_DURATION = 40000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  switchStateIfNeeded();
  displayCorrectLight();
}

function switchStateIfNeeded() {
  if (lightState === "green" && millis() > lastTimeSwitched + GREEN_LIGHT_DURATION) {
    lightState = "yellow";
    lastTimeSwitched = millis();
  }
  else if (lightState === "yellow" && millis() > lastTimeSwitched + YELLOW_LIGHT_DURATION) {
    lightState = "red";
    lastTimeSwitched = millis();
  }
  else if (lightState === "red" && millis() > lastTimeSwitched + RED_LIGHT_DURATION) {
    lightState = "green";
    lastTimeSwitched = millis();
  }
}

function displayCorrectLight() {
  if (lightState === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if (lightState === "yellow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if (lightState === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
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
