// Firework

class Particle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    thid.dx = random(-5,5);
    this.dy = random(-5,5);
    this.size = 5;
    this.r = 255;
    this.g = 0;
    this.b = 0;

  }
  display(){
    fill(this.r,rhis.g,this.b);
    circle(this.x,this.y,this.size);
  }

  move(){
    this.x+=this.dx;
    this.y+= this.dy;
  }
}

let theFireworks = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let firework of theFireworks){
    firework.move();
    fireworkdiaplay();

  }
}

function draw() {
  background(220);
}

function mousePressed(){
  for(let i = 0; i<50; i++){
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}