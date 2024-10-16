// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bgMusicLoop;
let clickSound;

function preload() {
  bgMusicLoop = loadSound("bgmusic.mp3");
  clickSound = loadSound("potpickup.ogg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusicLoop.amp(0.3);
  clickSound.amp(1.0);
}

function draw() {
  background(220);
}

function keyPressed() {
  if (!bgMusicLoop.isPlaying()) {
    bgMusicLoop.loop();
  }
}

function mousePressed() {
  clickSound.play();
}
