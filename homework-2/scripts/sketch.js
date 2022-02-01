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

// student 1 variables
var studentShapeXs1 = [];
var studentShapeYs1 = [];
var studentDiameters1 = [];

var studentShapeXSpeeds1 = 0;
var studentShapeYSpeeds1 = 0;

// student 2 variables
var studentShapeXs2 = [];
var studentShapeYs2 = [];
var studentDiameters2 = [];

var studentShapeXSpeeds2 = 0;
var studentShapeYSpeeds2 = 0;

// student 3 variables
var studentShapeXs3 = [];
var studentShapeYs3 = [];
var studentDiameters3 = [];

var studentShapeXSpeeds3 = 0;
var studentShapeYSpeeds3 = 0;

// student 4 variables
var studentShapeXs4 = [];
var studentShapeYs4 = [];
var studentDiameters4 = [];

var studentShapeXSpeeds4 = 0;
var studentShapeYSpeeds4 = 0;

// student 5 variables
var studentShapeXs5 = [];
var studentShapeYs5 = [];
var studentDiameters5 = [];

var studentShapeXSpeeds5 = 0;
var studentShapeYSpeeds5 = 0;

// student 6 variables
var studentShapeXs6 = [];
var studentShapeYs6 = [];
var studentDiameters6 = [];

var studentShapeXSpeeds6 = 0;
var studentShapeYSpeeds6 = 0;

// student 7 variables
var studentShapeXs7 = [];
var studentShapeYs7 = [];
var studentDiameters7 = [];

var studentShapeXSpeeds7 = 0;
var studentShapeYSpeeds7 = 0;

// student 8 variables
var studentShapeXs8 = [];
var studentShapeYs8 = [];
var studentDiameters8 = [];

var studentShapeXSpeeds8 = 0;
var studentShapeYSpeeds8 = 0;

// student 9 variables
var studentShapeXs9 = [];
var studentShapeYs9 = [];
var studentDiameters9 = [];

var studentShapeXSpeeds9 = 0;
var studentShapeYSpeeds9 = 0;

// student 10 variables
var studentShapeXs10 = [];
var studentShapeYs10 = [];
var studentDiameters10 = [];

var studentShapeXSpeeds10 = 0;
var studentShapeYSpeeds10 = 0;

// random teacher color 
var redColor1, greenColor1, blueColor1;

// random text color 
var redColor3, greenColor3, blueColor3;

// random student 1 color 
var redColor2, greenColor2, blueColor2;

// random student 2 color 
var redColor4, greenColor4, blueColor4;

// random student 3 color 
var redColor5, greenColor5, blueColor5;

// random student 4 color 
var redColor6, greenColor6, blueColor6;

// random student 5 color 
var redColor7, greenColor7, blueColor7;

// random student 6 color 
var redColor8, greenColor8, blueColor8;

// random student 7 color 
var redColor9, greenColor9, blueColor9;

// random student 8 color 
var redColor10, greenColor10, blueColor10;

// random student 9 color 
var redColor11, greenColor11, blueColor11;

// random student 10 color 
var redColor12, greenColor12, blueColor12;

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

    // student color 1
    strokeWeight(1);
    fill(redColor2, greenColor2, blueColor2);

    // draw student 1
    for (var i = 0; i < studentShapeXs1.length; i++) {
        circle(studentShapeXs1[i], studentShapeYs1[i], studentDiameters1[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs1[i] >= 1100) {
            studentShapeXSpeeds1 = random(1, 10);
            studentShapeXSpeeds1 = -studentShapeXSpeeds1;
        } else if (studentShapeXs1[i] <= 0) {
            studentShapeXSpeeds1 = random(1, 10);

        }
        if (studentShapeYs1[i] >= 700) {
            studentShapeYSpeeds1 = random(1, 10);
            studentShapeYSpeeds1 = -studentShapeYSpeeds1;
        } else if (studentShapeYs1[i] <= 0) {
            studentShapeYSpeeds1 = random(1, 10);

        }
        studentShapeXs1[i] = studentShapeXs1[i] + studentShapeXSpeeds1;
        studentShapeYs1[i] = studentShapeYs1[i] + studentShapeYSpeeds1;
    }

    // student color 2
    fill(redColor4, greenColor4, blueColor4);

    // draw student 2
    for (var i = 0; i < studentShapeXs2.length; i++) {
        circle(studentShapeXs2[i], studentShapeYs2[i], studentDiameters2[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs2[i] >= 1100) {
            studentShapeXSpeeds2 = random(1, 10);
            studentShapeXSpeeds2 = -studentShapeXSpeeds2;
        } else if (studentShapeXs2[i] <= 0) {
            studentShapeXSpeeds2 = random(1, 10);

        }
        if (studentShapeYs2[i] >= 700) {
            studentShapeYSpeeds2 = random(1, 10);
            studentShapeYSpeeds2 = -studentShapeYSpeeds2;
        } else if (studentShapeYs2[i] <= 0) {
            studentShapeYSpeeds2 = random(1, 10);

        }
        studentShapeXs2[i] = studentShapeXs2[i] + studentShapeXSpeeds2;
        studentShapeYs2[i] = studentShapeYs2[i] + studentShapeYSpeeds2;
    }

    // student color 3
    fill(redColor5, greenColor5, blueColor5);

    // draw student 3
    for (var i = 0; i < studentShapeXs3.length; i++) {
        circle(studentShapeXs3[i], studentShapeYs3[i], studentDiameters3[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs3[i] >= 1100) {
            studentShapeXSpeeds3 = random(1, 10);
            studentShapeXSpeeds3 = -studentShapeXSpeeds3;
        } else if (studentShapeXs3[i] <= 0) {
            studentShapeXSpeeds3 = random(1, 10);

        }
        if (studentShapeYs3[i] >= 700) {
            studentShapeYSpeeds3 = random(1, 10);
            studentShapeYSpeeds3 = -studentShapeYSpeeds3;
        } else if (studentShapeYs3[i] <= 0) {
            studentShapeYSpeeds3 = random(1, 10);

        }
        studentShapeXs3[i] = studentShapeXs3[i] + studentShapeXSpeeds3;
        studentShapeYs3[i] = studentShapeYs3[i] + studentShapeYSpeeds3;
    }
    // student color 4
    fill(redColor6, greenColor6, blueColor6);

    // draw student 4
    for (var i = 0; i < studentShapeXs4.length; i++) {
        circle(studentShapeXs4[i], studentShapeYs4[i], studentDiameters4[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs4[i] >= 1100) {
            studentShapeXSpeeds4 = random(1, 10);
            studentShapeXSpeeds4 = -studentShapeXSpeeds4;
        } else if (studentShapeXs4[i] <= 0) {
            studentShapeXSpeeds4 = random(1, 10);

        }
        if (studentShapeYs4[i] >= 700) {
            studentShapeYSpeeds4 = random(1, 10);
            studentShapeYSpeeds4 = -studentShapeYSpeeds4;
        } else if (studentShapeYs4[i] <= 0) {
            studentShapeYSpeeds4 = random(1, 10);

        }
        studentShapeXs4[i] = studentShapeXs4[i] + studentShapeXSpeeds4;
        studentShapeYs4[i] = studentShapeYs4[i] + studentShapeYSpeeds4;
    }
    // student color 5
    fill(redColor7, greenColor7, blueColor7);

    // draw student 5
    for (var i = 0; i < studentShapeXs5.length; i++) {
        circle(studentShapeXs5[i], studentShapeYs5[i], studentDiameters5[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs5[i] >= 1100) {
            studentShapeXSpeeds5 = random(1, 10);
            studentShapeXSpeeds5 = -studentShapeXSpeeds5;
        } else if (studentShapeXs5[i] <= 0) {
            studentShapeXSpeeds5 = random(1, 10);

        }
        if (studentShapeYs5[i] >= 700) {
            studentShapeYSpeeds5 = random(1, 10);
            studentShapeYSpeeds5 = -studentShapeYSpeeds5;
        } else if (studentShapeYs5[i] <= 0) {
            studentShapeYSpeeds5 = random(1, 10);

        }
        studentShapeXs5[i] = studentShapeXs5[i] + studentShapeXSpeeds5;
        studentShapeYs5[i] = studentShapeYs5[i] + studentShapeYSpeeds5;
    }

    // student color 6
    fill(redColor8, greenColor8, blueColor8);

    // draw student 6
    for (var i = 0; i < studentShapeXs6.length; i++) {
        circle(studentShapeXs6[i], studentShapeYs6[i], studentDiameters6[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs6[i] >= 1100) {
            studentShapeXSpeeds6 = random(1, 10);
            studentShapeXSpeeds6 = -studentShapeXSpeeds6;
        } else if (studentShapeXs6[i] <= 0) {
            studentShapeXSpeeds6 = random(1, 10);

        }
        if (studentShapeYs6[i] >= 700) {
            studentShapeYSpeeds6 = random(1, 10);
            studentShapeYSpeeds6 = -studentShapeYSpeeds6;
        } else if (studentShapeYs6[i] <= 0) {
            studentShapeYSpeeds6 = random(1, 10);

        }
        studentShapeXs6[i] = studentShapeXs6[i] + studentShapeXSpeeds6;
        studentShapeYs6[i] = studentShapeYs6[i] + studentShapeYSpeeds6;
    }

    // student color 7
    fill(redColor9, greenColor9, blueColor9);

    // draw student 7
    for (var i = 0; i < studentShapeXs7.length; i++) {
        circle(studentShapeXs7[i], studentShapeYs7[i], studentDiameters7[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs7[i] >= 1200) {
            studentShapeXSpeeds7 = random(1, 10);
            studentShapeXSpeeds7 = -studentShapeXSpeeds7;
        } else if (studentShapeXs7[i] <= 0) {
            studentShapeXSpeeds7 = random(1, 10);

        }
        if (studentShapeYs7[i] >= 800) {
            studentShapeYSpeeds7 = random(1, 10);
            studentShapeYSpeeds7 = -studentShapeYSpeeds7;
        } else if (studentShapeYs7[i] <= 0) {
            studentShapeYSpeeds7 = random(1, 10);

        }
        studentShapeXs7[i] = studentShapeXs7[i] + studentShapeXSpeeds7;
        studentShapeYs7[i] = studentShapeYs7[i] + studentShapeYSpeeds7;
    }

    // student color 8
    fill(redColor10, greenColor10, blueColor10);

    // draw student 8
    for (var i = 0; i < studentShapeXs8.length; i++) {
        circle(studentShapeXs8[i], studentShapeYs8[i], studentDiameters8[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs8[i] >= 1200) {
            studentShapeXSpeeds8 = random(1, 10);
            studentShapeXSpeeds8 = -studentShapeXSpeeds8;
        } else if (studentShapeXs8[i] <= 0) {
            studentShapeXSpeeds8 = random(1, 10);

        }
        if (studentShapeYs8[i] >= 800) {
            studentShapeYSpeeds8 = random(1, 10);
            studentShapeYSpeeds8 = -studentShapeYSpeeds8;
        } else if (studentShapeYs8[i] <= 0) {
            studentShapeYSpeeds8 = random(1, 10);

        }
        studentShapeXs8[i] = studentShapeXs8[i] + studentShapeXSpeeds8;
        studentShapeYs8[i] = studentShapeYs8[i] + studentShapeYSpeeds8;
    }
    // student color 9
    fill(redColor11, greenColor11, blueColor11);

    // draw student 9
    for (var i = 0; i < studentShapeXs9.length; i++) {
        circle(studentShapeXs9[i], studentShapeYs9[i], studentDiameters9[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs9[i] >= 1200) {
            studentShapeXSpeeds9 = random(1, 10);
            studentShapeXSpeeds9 = -studentShapeXSpeeds9;
        } else if (studentShapeXs9[i] <= 0) {
            studentShapeXSpeeds9 = random(1, 10);

        }
        if (studentShapeYs9[i] >= 800) {
            studentShapeYSpeeds9 = random(1, 10);
            studentShapeYSpeeds9 = -studentShapeYSpeeds9;
        } else if (studentShapeYs9[i] <= 0) {
            studentShapeYSpeeds9 = random(1, 10);

        }
        studentShapeXs9[i] = studentShapeXs9[i] + studentShapeXSpeeds9;
        studentShapeYs9[i] = studentShapeYs9[i] + studentShapeYSpeeds9;
    }

    // student color 10
    fill(redColor12, greenColor12, blueColor12);

    // draw student 10
    for (var i = 0; i < studentShapeXs10.length; i++) {
        circle(studentShapeXs10[i], studentShapeYs10[i], studentDiameters10[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentShapeXs10[i] >= 1200) {
            studentShapeXSpeeds10 = random(1, 10);
            studentShapeXSpeeds10 = -studentShapeXSpeeds10;
        } else if (studentShapeXs10[i] <= 0) {
            studentShapeXSpeeds10 = random(1, 10);

        }
        if (studentShapeYs10[i] >= 800) {
            studentShapeYSpeeds10 = random(1, 10);
            studentShapeYSpeeds10 = -studentShapeYSpeeds10;
        } else if (studentShapeYs10[i] <= 0) {
            studentShapeYSpeeds10 = random(1, 10);

        }
        studentShapeXs10[i] = studentShapeXs10[i] + studentShapeXSpeeds10;
        studentShapeYs10[i] = studentShapeYs10[i] + studentShapeYSpeeds10;
    }

    // createTeacher(100,100)
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
    stroke(1);
    rect(teacherX, teacherY, 50, 50);
}

// student sizes
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}