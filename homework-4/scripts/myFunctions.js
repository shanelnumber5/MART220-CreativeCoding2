function windowResized() {
    resizeCanvas(windowWidth - 40, windowHeight - 40);
}

function timeIt() {
    timerValue++;
}

function createBorders(thickness) {
    fill(173, 166, 147);
    // top border
    rect(0, 0, width, thickness);
    // bottom border
    rect(0, height - 20, width, thickness);
    // left border
    rect(0, 0, 10, height);
    // right upper border
    rect(width - 10, 0, 10, height - 100);
}

function incrementRunIndex(){
    // increment the index
    j += 1;

    // if we reach the end of the array, start over
    if (j >= runanimation.length) 
        j = 0;
    }  

function createTeacher(x, y) {
    teacherX = x;
    teacherY = y;
}

// teacher demographics
function drawTeacher() {
    fill(redColor11, greenColor11, blueColor11);
    stroke(1);
    rect(teacherX, teacherY, 50, 50);
}

function teacherMovement() {
    // handle the keys
    if (keyIsDown(UP_ARROW)) {
        teacherY -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        teacherY += 10;
    }
    if (keyIsDown(LEFT_ARROW)) {
        teacherX -= 10;
        console.log("movement: " + teacherX);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        teacherX += 10;
    }
}

// student sizes
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
