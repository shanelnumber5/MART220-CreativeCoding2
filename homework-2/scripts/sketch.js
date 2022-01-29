// x and y for the teacher
var teacherX = 0;
var teacherY = 100;

// defined key codes for each letter
// teacher movement
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

// x and y for the students
var studentShapeX = 0;
var studentShapeY = 0;

var studentShapeXs = [];
var studentShapeYs = [];
var studentDiameters = [];

var studentShapeXSpeeds = 0;
var studentShapeYSpeeds = 0;

// random teacher color 
var redColor1, greenColor1, blueColor1;

// random student color 
var redColor2, greenColor2, blueColor2;

// random text color 
var redColor3, greenColor3, blueColor3;

function setup() {
    createCanvas(1200, 800);
    // back button
    button = createButton("Back");
    button.size(200, 100);
    button.position(500, 790);
    button.style("font-family", "Bodoni");
    button.style("font-size", "48px");
    button = createImg('images/meme.png');
    button.size(100, 100);
    button.position(400, 790);
    studentShapeXSpeeds = random(1, 10);
    studentShapeYSpeeds = random(1, 10);

    // random colors
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);

    // teacher placement
    createTeacher(50, 50);

}

function draw() {
    background(123, 171, 91);
    strokeWeight(5);


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

    textSize(20);
    fill(redColor3, greenColor3, blueColor3);
    textFont('Cursive');
    text("Shanel Locke", 1075, 775);
    textSize(40);
    textFont('Georgia');
    text("The Teacher - Recess Duty", 100, 100);

    // call createBorders function
    createBorders(50);

    // student color
    fill(redColor2, greenColor2, blueColor2);

    // get a random speed when it first starts for students
    for (var i = 0; i < 10; i++) {
        studentShapeXs[i] = getRandomNumber(1150);
        studentShapeYs[i] = getRandomNumber(750);
        studentDiameters[i] = getRandomNumber(20);
    }

    // draw the students
    for (var i = 0; i < studentShapeXs.length; i++) {
        circle(studentShapeXs[i], studentShapeYs[i], studentDiameters[i]);
    }

    if (studentShapeX >= 1200) {
        studentShapeXSpeeds = random(1, 10);
        studentShapeXSpeeds = -studentShapeXSpeeds;
    } else if (studentShapeX <= 0) {
        studentShapeXSpeeds = random(1, 10);

    }
    if (studentShapeY >= 800) {
        studentShapeYSpeeds = random(1, 10);
        studentShapeYSpeeds = -studentShapeYSpeeds;
    } else if (studentShapeY <= 0) {
        studentShapeYSpeeds = random(1, 10);

    }

    studentShapeX = studentShapeX + studentShapeXSpeeds;
    studentShapeY = studentShapeY + studentShapeYSpeeds;

    // createTeacher(100,100);
    drawTeacher();
    teacherMovement();

    // check to see if the teacher has left the exit
    if (teacherX > width && teacherY > height - 100) {
        stroke(5);
        textSize(50);
        fill(redColor3, greenColor3, blueColor3);
        text("You Saved", width / 2 + 200, height / 2 + 155);
        text("All the Students!", width / 2 + 150, height / 2 + 205);
    }
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

function createTeacher(x, y) {
    teacherX = x;
    teacherY = y;

}

// teacher demographics
function drawTeacher() {
    fill(redColor1, greenColor1, blueColor1);
    stroke(2);
    circle(teacherX, teacherY, 50);
}

// student sizes
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}