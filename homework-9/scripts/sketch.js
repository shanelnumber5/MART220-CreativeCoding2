var x = 0;
var y = 0;
var z = 250;
var toruses = [];
var speed = -1;
var locationX = -200;
var locationY = -200;
var locationX2 = -100;
var locationY2 = -100;
var locationX3 = 200;
var locationY3 = -150;

function preload() {
  homer = loadImage('assets/homer.png');
  frosting = loadImage('assets/frosting.png');
  song = loadSound('assets/sleep.wav');
}

function setup() {
  createCanvas(displayWidth - 500, displayHeight - 100, WEBGL);

  for (let i = 0; i < 2; i++) {
    let myT = new myTorus(50, 30, 24, 24, locationX, locationY);
    toruses.push(myT);
    locationX += 200;
    locationY += 0;
  }

  for (let i = 0; i < 3; i++) {
    let myT = new myTorus(30, 20, 240, 24, locationX2, locationY2);
    toruses.push(myT);
    locationX2 += 100;
    locationY2 += 0;
  }

  for (let i = 0; i < 4; i++) {
    let myT = new myTorus(55, 40, 240, 24, locationX3, locationY3);
    toruses.push(myT);
    locationX3 += -150;
    locationY3 += 0;
  }
}

function draw() {
  background(255);
  image(homer, -450, -425, 875, 850);
  texture(frosting);
  noStroke()

  for (let i = 0; i < toruses.length; i++) {
    push();
    toruses[i].translateTorus();
    toruses[i].rotateTorus(frameCount * .006);
    toruses[i].show();
    pop();
  }

}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }

}