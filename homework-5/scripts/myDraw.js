function draw() {
    background(grass);
    strokeWeight(5);

    image(animation1[s], 1350, height / 3, swingset.width / 8, swingset.height / 7);

    image(playground, 500, height / 4, playground.width / 10, playground.height / 10);

    image(court, 750, height / 2, court.width / 5, court.height / 4);

    // timer
    fill(redColor1, greenColor1, blueColor1);
    textSize(80);

    if (timerValue < 10) {
        text('0:0' + timerValue, width / 2, height / 2 + 450);
    } else if (timerValue >= 10 && timerValue < 60) {
        text("0:" + timerValue, width / 2, height / 2 + 450);
    } else if (timerValue >= 60) {
        text('Game Over', width / 2, height / 2 + 450);
    }

    // createTeacher(100,100)
    drawTeacher();
    teacherMovement();
    createBorders(50);

    // text 
    textSize(30);
    fill(redColor13, greenColor13, blueColor13);
    textFont(myFont);
    text("Shanel Locke", width / 2 + 700, height / 2 + 460);
    textSize(60);
    textFont(myFont2);
    text("The Teacher - Recess Duty", width / 2 - 490, height / 2 - 420);
    textSize(40);
    textFont(myFont2);
    fill(redColor12, greenColor12, blueColor12);
    text("(You Have 60 Seconds to Collect All the Students)", width / 2 + 470, height / 2 - 420);

    // check to see if the teacher has left the exit
    if (teacherX > width && teacherY > height - 100) {
        stroke(5);
        textSize(50);
        fill(redColor12, greenColor12, blueColor12);
        textAlign(CENTER);
        text("You Saved", width / 2 + 200, height / 2 + 200);
        text("All the Students!", width / 2 + 200, height / 2 + 250);
    }


    // student color 1
    strokeWeight(1);
    fill(redColor1, greenColor1, blueColor1);

    // draw student 1
    for (var i = 0; i < studentXs1.length; i++) {
        circle(studentXs1[i], studentYs1[i], diameters1[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs1[i] >= width) {
            studentXSpeeds1 = random(1, 10);
            studentXSpeeds1 = -studentXSpeeds1;
        } else if (studentXs1[i] <= 0) {
            studentXSpeeds1 = random(1, 10);

        }
        if (studentYs1[i] >= height) {
            studentYSpeeds1 = random(1, 10);
            studentYSpeeds1 = -studentYSpeeds1;
        } else if (studentYs1[i] <= 0) {
            studentYSpeeds1 = random(1, 10);

        }
        studentXs1[i] = studentXs1[i] + studentXSpeeds1;
        studentYs1[i] = studentYs1[i] + studentYSpeeds1;
    }

    // student color 2
    fill(redColor2, greenColor2, blueColor2);

    // draw student 2
    for (var i = 0; i < studentXs2.length; i++) {
        circle(studentXs2[i], studentYs2[i], diameters2[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs2[i] >= width) {
            studentXSpeeds2 = random(1, 10);
            studentXSpeeds2 = -studentXSpeeds2;
        } else if (studentXs2[i] <= 0) {
            studentXSpeeds2 = random(1, 10);

        }
        if (studentYs2[i] >= height) {
            studentYSpeeds2 = random(1, 10);
            studentYSpeeds2 = -studentYSpeeds2;
        } else if (studentYs2[i] <= 0) {
            studentYSpeeds2 = random(1, 10);

        }
        studentXs2[i] = studentXs2[i] + studentXSpeeds2;
        studentYs2[i] = studentYs2[i] + studentYSpeeds2;
    }

    // student color 3
    fill(redColor3, greenColor3, blueColor3);

    // draw student 3
    for (var i = 0; i < studentXs3.length; i++) {
        circle(studentXs3[i], studentYs3[i], diameters3[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs3[i] >= width) {
            studentXSpeeds3 = random(1, 10);
            studentXSpeeds3 = -studentXSpeeds3;
        } else if (studentXs3[i] <= 0) {
            studentXSpeeds3 = random(1, 10);

        }
        if (studentYs3[i] >= height) {
            studentYSpeeds3 = random(1, 10);
            studentYSpeeds3 = -studentYSpeeds3;
        } else if (studentYs3[i] <= 0) {
            studentYSpeeds3 = random(1, 10);

        }
        studentXs3[i] = studentXs3[i] + studentXSpeeds3;
        studentYs3[i] = studentYs3[i] + studentYSpeeds3;
    }
    // student color 4
    fill(redColor4, greenColor4, blueColor4);

    // draw student 4
    for (var i = 0; i < studentXs4.length; i++) {
        circle(studentXs4[i], studentYs4[i], diameters4[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs4[i] >= width) {
            studentXSpeeds4 = random(1, 10);
            studentXSpeeds4 = -studentXSpeeds4;
        } else if (studentXs4[i] <= 0) {
            studentXSpeeds4 = random(1, 10);

        }
        if (studentYs4[i] >= height) {
            studentYSpeeds4 = random(1, 10);
            studentYSpeeds4 = -studentYSpeeds4;
        } else if (studentYs4[i] <= 0) {
            studentYSpeeds4 = random(1, 10);

        }
        studentXs4[i] = studentXs4[i] + studentXSpeeds4;
        studentYs4[i] = studentYs4[i] + studentYSpeeds4;
    }
    // student color 5
    fill(redColor5, greenColor5, blueColor5);

    // draw student 5
    for (var i = 0; i < studentXs5.length; i++) {
        circle(studentXs5[i], studentYs5[i], diameters5[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs5[i] >= width) {
            studentXSpeeds5 = random(1, 10);
            studentXSpeeds5 = -studentXSpeeds5;
        } else if (studentXs5[i] <= 0) {
            studentXSpeeds5 = random(1, 10);

        }
        if (studentYs5[i] >= height) {
            studentYSpeeds5 = random(1, 10);
            studentYSpeeds5 = -studentYSpeeds5;
        } else if (studentYs5[i] <= 0) {
            studentYSpeeds5 = random(1, 10);

        }
        studentXs5[i] = studentXs5[i] + studentXSpeeds5;
        studentYs5[i] = studentYs5[i] + studentYSpeeds5;
    }

    // student color 6
    fill(redColor6, greenColor6, blueColor6);

    // draw student 6
    for (var i = 0; i < studentXs6.length; i++) {
        circle(studentXs6[i], studentYs6[i], diameters6[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs6[i] >= width) {
            studentXSpeeds6 = random(1, 10);
            studentXSpeeds6 = -studentXSpeeds6;
        } else if (studentXs6[i] <= 0) {
            studentXSpeeds6 = random(1, 10);

        }
        if (studentYs6[i] >= height) {
            studentYSpeeds6 = random(1, 10);
            studentYSpeeds6 = -studentYSpeeds6;
        } else if (studentYs6[i] <= 0) {
            studentYSpeeds6 = random(1, 10);

        }
        studentXs6[i] = studentXs6[i] + studentXSpeeds6;
        studentYs6[i] = studentYs6[i] + studentYSpeeds6;
    }

    // student color 7
    fill(redColor7, greenColor7, blueColor7);

    // draw student 7
    for (var i = 0; i < studentXs7.length; i++) {
        circle(studentXs7[i], studentYs7[i], diameters7[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs7[i] >= width) {
            studentXSpeeds7 = random(1, 10);
            studentXSpeeds7 = -studentXSpeeds7;
        } else if (studentXs7[i] <= 0) {
            studentXSpeeds7 = random(1, 10);

        }
        if (studentYs7[i] >= height) {
            studentYSpeeds7 = random(1, 10);
            studentYSpeeds7 = -studentYSpeeds7;
        } else if (studentYs7[i] <= 0) {
            studentYSpeeds7 = random(1, 10);

        }
        studentXs7[i] = studentXs7[i] + studentXSpeeds7;
        studentYs7[i] = studentYs7[i] + studentYSpeeds7;
    }

    // student color 8
    fill(redColor8, greenColor8, blueColor8);

    // draw student 8
    for (var i = 0; i < studentXs8.length; i++) {
        circle(studentXs8[i], studentYs8[i], diameters8[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs8[i] >= width) {
            studentXSpeeds8 = random(1, 10);
            studentXSpeeds8 = -studentXSpeeds8;
        } else if (studentXs8[i] <= 0) {
            studentXSpeeds8 = random(1, 10);

        }
        if (studentYs8[i] >= height) {
            studentYSpeeds8 = random(1, 10);
            studentYSpeeds8 = -studentYSpeeds8;
        } else if (studentYs8[i] <= 0) {
            studentYSpeeds8 = random(1, 10);

        }
        studentXs8[i] = studentXs8[i] + studentXSpeeds8;
        studentYs8[i] = studentYs8[i] + studentYSpeeds8;
    }
    // student color 9
    fill(redColor9, greenColor9, blueColor9);

    // draw student 9
    for (var i = 0; i < studentXs9.length; i++) {
        circle(studentXs9[i], studentYs9[i], diameters9[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs9[i] >= width) {
            studentXSpeeds9 = random(1, 10);
            studentXSpeeds9 = -studentXSpeeds9;
        } else if (studentXs9[i] <= 0) {
            studentXSpeeds9 = random(1, 10);

        }
        if (studentYs9[i] >= height) {
            studentYSpeeds9 = random(1, 10);
            studentYSpeeds9 = -studentYSpeeds9;
        } else if (studentYs9[i] <= 0) {
            studentYSpeeds9 = random(1, 10);

        }
        studentXs9[i] = studentXs9[i] + studentXSpeeds9;
        studentYs9[i] = studentYs9[i] + studentYSpeeds9;
    }

    // student color 10
    fill(redColor10, greenColor10, blueColor10);

    // draw student 10
    for (var i = 0; i < studentXs10.length; i++) {
        circle(studentXs10[i], studentYs10[i], diameters10[i]);
    }
    for (var i = 0; i < 1; i++) {
        if (studentXs10[i] >= width) {
            studentXSpeeds10 = random(1, 10);
            studentXSpeeds10 = -studentXSpeeds10;
        } else if (studentXs10[i] <= 0) {
            studentXSpeeds10 = random(1, 10);

        }
        if (studentYs10[i] >= height) {
            studentYSpeeds10 = random(1, 10);
            studentYSpeeds10 = -studentYSpeeds10;
        } else if (studentYs10[i] <= 0) {
            studentYSpeeds10 = random(1, 10);

        }
        studentXs10[i] = studentXs10[i] + studentXSpeeds10;
        studentYs10[i] = studentYs10[i] + studentYSpeeds10;
    }
}