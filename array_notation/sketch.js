// Array Notation
// Digdarshan Kc
// Date
//
// Extra for Experts:
 
let paddleWidth = 20;
let paddleHeight = 100;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
}
function draw() {
  court();
  paddleMovement();

}
function court(){  
// Generate random RGB values
  let r = random(255);
  let g = random(255);
  let b = random(255);
  // Set the background color
  background(r,g,b);
  circle(windowWidth/2,windowHeight/2,200);
  line( windowWidth/2,0, windowWidth/2, windowHeight);
  rect(x,y,paddleWidth, paddleHeight);
}

function paddleMovement(){
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  } 
  else if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
}





