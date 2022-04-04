var x = 0;
var y = 0;
var z = 250;

var lotions = [];
var speed = -1;
var locationX = -200;
var locationY = -200;

let chianti;
let purse;

let annie;

let myTexture;
let mySkull;
var rotateSpeed = .01;
var skullX = 300;
var skullY = -100;
var mySkullObject;

function preload() {
  buffalo = loadImage('assets/buffalo.jpg');


  mySkull = loadModel('assets/skull.obj');
  myTexture = loadImage('assets/bone.jpg');


  purse = loadModel('assets/purse.obj', true);
  skin = loadImage('assets/skin.jpg');

  label = loadImage('assets/label.png');

  chianti = loadModel('assets/wine.obj', true);
  wineLabel = loadImage('assets/wineLabel.jpg');

  annie = loadFont('assets/AnnieUseYourTelescope-Regular.ttf');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);

  textFont(annie);
  textSize(width / 3);
  textAlign(CENTER, CENTER);

  mySkullObject = new skullClass(skullX, skullY, rotateSpeed, mySkull, myTexture);

  for (let i = 0; i < 2; i++) {
    let myL = new myLotion(40, 100, 24, 24, locationX, locationY);
    lotions.push(myL);
    locationX += 300;
    locationY += -300;
  }
}

function draw() {
  background(0);
  image(buffalo, -1200, -550, 1075, 850);

  for (let i = 0; i < lotions.length; i++) {
    push();
    lotions[i].translateCylinder();
    lotions[i].rotateCylinder(frameCount * .006);
    lotions[i].show();
    pop();
  }

  //skin purse
  push();
  noStroke();
  texture(skin);
  translate(300, -300);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  scale(2);
  model(purse);
  pop();

  push();
  mySkullObject.draw();
  pop();

  //chianti wine
  push();
  texture(wineLabel);
  translate(400, 200);
  noStroke();
  scale(3);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(chianti);
  pop();

  //title
  push();
  let time = millis();
  rotateZ(time * 0.0001);
  scale(.09);
  text('"Lambs": By Shanel Locke', 300, -400);
  pop();

  //lotion label
  scale(15);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.04);
  texture(label);
}

function mousePressed() {
  rotateSpeed += .05;
  mySkullObject.updateSpeed(rotateSpeed);
}

function mouseReleased() {
  rotateSpeed -= .05;
  mySkullObject.updateSpeed(rotateSpeed);
}

function mouseDragged() {
  skullX = mouseX - width / 2;
  skullY = mouseY - height / 2;
  mySkullObject.updateX(skullX);
  mySkullObject.updateY(skullY);
}