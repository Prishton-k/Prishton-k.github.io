// Snake game
// Digdarshan KC
// 30th Oct 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let square;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  square(50,50,50);
  squareMove();
}


function suqareMove(){
  if (keycode==="w"){
    square +=5;
  }
}
