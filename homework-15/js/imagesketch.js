let img;

function preload() {
  img = loadImage('meme.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight - 400);
  image(img, 0, 0, 600, height);
  let d = pixelDensity();
  let picture = 4 * (width * d) * (height * d);
  loadPixels();
  for (let i = 0; i < picture; i++) {
    pixels[i + picture] = pixels[i];
  }
  updatePixels();
}

function draw() {
  noStroke()
  fill(0)
  // left border
  rect(.5, 0, 7, height);
  // right border
  rect(600, 0, 7, height);
  // bottom border
  rect(0, height - 20, 600);
  // top border
  rect(0, -593, 600);

  // signature
  fill(255);
  textSize(30);
  textFont('Georgia');
  text('SLL', 300, 670);
}