var mainColor = 180;

function setup() {
    createCanvas(displayWidth - 150, displayHeight - 140);
    background(255);
    frameRate(50);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    fill(random(mainColor), random(mainColor), random(mainColor), random(100));

    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 200.0);
    star(0, 0, 5, 70, 3);
    star(100, 10, 5, 80, 3);
    star(200, 20, 5, 90, 3);
    star(300, 30, 5, 100, 3);
    star(300, 30, 5, 400, 3);
    pop();

    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 50, 40);
    star(400, 0, 80, 400, 40);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    star(100, 0, 30, 90, 5);
    star(200, 0, 30, 110, 5);
    star(300, 0, 30, 130, 5);
    star(400, 0, 30, 250, 5);
    pop();

    if (frameCount % 80 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
    //saveFrames("myMovie",".png",1,25);

    if (frameCount > 9000) { // 2 second * 25 fps = 25
        noLoop();
    }

    function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * radius2;
            let sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}