// Perlin NOise ball

let x ;
let y ;
let time = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);

  x = noise(time)*width;
  circle(x,y, 50);
  time +=0.01;
}
