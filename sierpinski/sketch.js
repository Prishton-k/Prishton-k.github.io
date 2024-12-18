// Sierpinski Triangle
// Recursion demo

let initialTriangle = [
  {x: 625, y: 50},
  {x: 50, y: 800},
  {x: 1200, y: 800}
];
let theDepth = 0;
let theColors = ["pink", "green" , "blue" ,"red ", "yellow", "orange","lightblue","lightgreen","brown","pink", "green" , "blue" ,"red ", "yellow", "orange","lightblue","lightgreen","brown"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  sierpinski(initialTriangle, theDepth);
}

function mousePressed() {
  if (theDepth < 18) {
    theDepth++;
  }
}

function sierpinski(points, depth) {
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y);

  //exit clause
  if (depth > 0) {
    //draw upper triangle
    sierpinski([points[0],
      midpoint(points[0], points[1]),
      midpoint(points[0], points[2])],
    depth - 1);

    //draw left triangle
    sierpinski([points[1],
      midpoint(points[0], points[1]),
      midpoint(points[1], points[2])],
    depth - 1);

    //draw right triangle
    sierpinski([points[2],
      midpoint(points[0], points[2]),
      midpoint(points[1], points[2])],
    depth - 1);
  }
}

function midpoint(point1, point2) {
  let midX = (point1.x + point2.x)/2;
  let midY = (point1.y + point2.y)/2;
  return {x: midX, y: midY};
}