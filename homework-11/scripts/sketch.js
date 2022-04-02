var x = 0;
var y = 0;
var z = 250;
let purse;
var lotions = [];
var speed = -1;
var locationX = -200;
var locationY = -200;


function preload() {
  buffalo = loadImage('assets/buffalo.jpg');
  purse = loadModel('assets/10130_BagPurse_v3_L3.obj', true);
  label = loadImage('assets/label.png');
  skin = loadImage('assets/skin.jpg');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);

  for (let i = 0; i < 2; i++) {
    let myL = new myLotion(40, 100, 24, 24, locationX, locationY);
    lotions.push(myL);
    locationX += 200;
    locationY += 0;
  }
}

function draw() {
  background(0);
  image(buffalo, -1100, -550, 1075, 850);
  texture(skin);

  translate(300, -200);
  //skin purse
  scale(3);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  model(purse);
  texture(label);
  noStroke()


  for (let i = 0; i < lotions.length; i++) {
    push();
    lotions[i].translateCylinder();
    lotions[i].rotateCylinder(frameCount * .006);
    lotions[i].show();
    pop();
  }

}