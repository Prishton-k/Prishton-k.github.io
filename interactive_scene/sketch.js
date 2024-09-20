// Interactive Scene
// Digdarshan KC
// September-21-2024




let x = 200;
let y = 200;
let speed = 4;
let luigiImg;

function preload() {
  luigiImg = loadImage("luigi2.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  moveCharacter();
  showCharacter();
}

function moveCharacter() {
  if (keyIsDown(87)) { //w
    y -= speed;   // y = y - speed;
  }
  if (keyIsDown(83)) { //s
    y += speed;   // y = y + speed;
  }
  if (keyIsDown(65)) { //a
    x -= speed;   // x = x - speed;
  }
  if (keyIsDown(68)) { //d
    x += speed;   // x = x + speed;
  }
}

function showCharacter() {
  // square(x, y, 50);
  image(luigiImg, x, y, luigiImg.width * 0.2, luigiImg.height * 0.2);
}
