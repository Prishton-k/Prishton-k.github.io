//Digdarshan KC
//Computer Science 30
//October 1 2024
// Mr Dan Schellenberg 
//Interactive scene

let circleSize = 50;
let circleColor = 0;
let shape = "circle"; // New variable to track the shape

function setup() {
  createCanvas(400, 400);
  background(255);
}

//settig the background and function
function draw() {
  background(170);
  drawShape();
  handleKeyboardInput();
}

function drawShape() {
  fill(circleColor);
  if (shape === "circle") {//make a circle
    ellipse(mouseX, mouseY, 50, 50);//size of circle and move the object where the mosue is
  } 
  else if (shape === "rect") {
    rect(mouseX - circleSize*2, mouseY - circleSize, circleSize, circleSize);//move the object where the mouse is and size of the object 
  }
}

function handleKeyboardInput() {//change the size of object 
  if (keyIsDown(UP_ARROW)) {//when click the up arrow increase the size of object by 5
    circleSize += 5;
  } 
  else if (keyIsDown(DOWN_ARROW)) {//when click the down arrow decrease the size of object by 5
    circleSize -= 5;
  }
  
  if (key === "c") {//change the object colour randomly in  any colour
    noStroke();
    circleColor = color(random(255), random(255), random(255));
  }
  
  
  
  if (key === "Arrowleft") {//When click the left arrow change the circle into square
    shape = "rect";
  }
  if (key === "ArrowRight"){// If clicks the right arrow change the object back to circle
    shape = "circle";
  }
}
