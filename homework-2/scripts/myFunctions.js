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
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);
    redColor11 = random(255);
    greenColor11 = random(255);
    blueColor11 = random(255);
    redColor12 = random(255);
    greenColor12 = random(255);
    blueColor12 = random(255);

    // teacher placement
    createTeacher(50, 100);

    // student 1 placement
    studentShapeXSpeeds1 = random(1, 10);
    studentShapeYSpeeds1 = random(1, 10);

    // get a random speed when it first starts for student 1
    for (var i = 0; i < 1; i++) {
        studentShapeXs2[i] = getRandomNumber(1150);
        studentShapeYs2[i] = getRandomNumber(750);
        studentDiameters2[i] = getRandomNumber(20);
    }

    // student 2 placement
    studentShapeXSpeeds2 = random(1, 10);
    studentShapeYSpeeds2 = random(1, 10);

    // get a random speed when it first starts for student 2
    for (var i = 0; i < 1; i++) {
        studentShapeXs2[i] = getRandomNumber(1150);
        studentShapeYs2[i] = getRandomNumber(750);
        studentDiameters2[i] = getRandomNumber(20);
    }

    // student 3 placement
    studentShapeXSpeeds3 = random(1, 10);
    studentShapeYSpeeds3 = random(1, 10);

    // get a random speed when it first starts for student 3
    for (var i = 0; i < 1; i++) {
        studentShapeXs3[i] = getRandomNumber(1150);
        studentShapeYs3[i] = getRandomNumber(750);
        studentDiameters3[i] = getRandomNumber(20);
    }

    // student 4 placement
    studentShapeXSpeeds4 = random(1, 10);
    studentShapeYSpeeds4 = random(1, 10);

    // get a random speed when it first starts for student 4
    for (var i = 0; i < 1; i++) {
        studentShapeXs4[i] = getRandomNumber(1150);
        studentShapeYs4[i] = getRandomNumber(750);
        studentDiameters4[i] = getRandomNumber(20);
    }

    // student 5 placement
    studentShapeXSpeeds3 = random(1, 10);
    studentShapeYSpeeds3 = random(1, 10);

    // get a random speed when it first starts for student 5
    for (var i = 0; i < 1; i++) {
        studentShapeXs3[i] = getRandomNumber(1150);
        studentShapeYs3[i] = getRandomNumber(750);
        studentDiameters3[i] = getRandomNumber(20);
    }

    // student 6 placement
    studentShapeXSpeeds6 = random(1, 10);
    studentShapeYSpeeds6 = random(1, 10);

    // get a random speed when it first starts for student 6
    for (var i = 0; i < 1; i++) {
        studentShapeXs6[i] = getRandomNumber(1150);
        studentShapeYs6[i] = getRandomNumber(750);
        studentDiameters6[i] = getRandomNumber(20);
    }

    // student 7 placement
    studentShapeXSpeeds7 = random(1, 10);
    studentShapeYSpeeds7 = random(1, 10);

    // get a random speed when it first starts for student 7
    for (var i = 0; i < 1; i++) {
        studentShapeXs7[i] = getRandomNumber(1150);
        studentShapeYs7[i] = getRandomNumber(750);
        studentDiameters7[i] = getRandomNumber(20);
    }

    // student 8 placement
    studentShapeXSpeeds8 = random(1, 10);
    studentShapeYSpeeds8 = random(1, 10);

    // get a random speed when it first starts for student 8
    for (var i = 0; i < 1; i++) {
        studentShapeXs8[i] = getRandomNumber(1150);
        studentShapeYs8[i] = getRandomNumber(750);
        studentDiameters8[i] = getRandomNumber(20);
    }

    // student 9 placement
    studentShapeXSpeeds9 = random(1, 10);
    studentShapeYSpeeds9 = random(1, 10);

    // get a random speed when it first starts for student 9
    for (var i = 0; i < 1; i++) {
        studentShapeXs9[i] = getRandomNumber(1150);
        studentShapeYs9[i] = getRandomNumber(750);
        studentDiameters9[i] = getRandomNumber(20);
    }

    // student 10 placement
    studentShapeXSpeeds10 = random(1, 10);
    studentShapeYSpeeds10 = random(1, 10);

    // get a random speed when it first starts for student 10
    for (var i = 0; i < 1; i++) {
        studentShapeXs10[i] = getRandomNumber(1150);
        studentShapeYs10[i] = getRandomNumber(750);
        studentDiameters10[i] = getRandomNumber(20);
    }
}