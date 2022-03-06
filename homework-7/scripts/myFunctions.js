// game area
function windowResized() {
    resizeCanvas(windowWidth - 40, windowHeight - 40);
}

// game timer
function timeIt() {
    timerValue++;
}

// playground fence
function createBorders(thickness) {
    fill(173, 166, 147);
    // top border
    rect(0, 0, width, thickness);
    // bottom border
    rect(0, height - 20, width, thickness);
    // left border
    rect(0, 0, 10, height);
}

// create teacher
function createTeacher(x, y) {
    teacherX = x;
    teacherY = y;
}

// teacher demographics
function drawTeacher() {
    fill(redColor4, greenColor4, blueColor4);
    stroke(1);
    rect(teacherX, teacherY, teacherWidth, teacherHeight);
}

// teacher movement
function teacherMovement() {
    // handle the keys
    if (keyIsDown(UP_ARROW)) {
        teacherY -= move;
    }
    if (keyIsDown(DOWN_ARROW)) {
        teacherY += move;
    }
    if (keyIsDown(LEFT_ARROW)) {
        teacherX -= move;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        teacherX += move;
    }
}

// swing speed
function incrementIndex1() {
    s += 1;
    if (s >= swingsetObjects.length) {
        s = 0;
    }
}

// basketball speed
function incrementIndex2() {
    c += 1;
    if (c >= courtObjects.length) {
        c = 0;
    }
}

// merry-go-round speeed
function incrementIndex3() {
    m += 1;
    if (m >= merryObjects.length) {
        m = 0;
    }
}

/* // large child speed
function incrementIndex4() {
    h += 1;
    if (h >= childObjects.length) {
        h = 0;
    }
} */

// student sizes
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}