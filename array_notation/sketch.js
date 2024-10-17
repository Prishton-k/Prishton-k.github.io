// Array Notation
// Digdarshan Kc
// Date
//
// Extra for Experts:
 

function setup() {
  createCanvas(windowWidth, windowHeight); 
}
function draw() {

  // Generate random RGB values
  let r = random(255);
  let g = random(255);
  let b = random(255);
  // Set the background color
  background(r,g,b);
  circle(windowWidth/2,windowHeight/2,200);
  line( windowWidth/2,0, windowWidth/2, windowHeight);
 
}

//making a paddle
function draw_paddle(){
  rect(windowWidth,windowHeight, 50,50);
  
}


