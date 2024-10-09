// Array Notation
// Digdarshan Kc
// Date
//
// Extra for Experts:
let x = random(0, 400);
let y = random(0,400);

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function preload() {
  sky = loadImage("sky.png");
}

function draw() {
  background(220);
  fill(220);
  circle(800,400,100,100);
  line( 800,0, 800, 780);
  image(sky);
}


