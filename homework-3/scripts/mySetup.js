function setup() {
    createCanvas(displayWidth, displayHeight);

    // back button
    button = createButton("Back");
    button.size(200, 100);
    button.position(innerWidth - 900, innerHeight + 200);
    button.style("font-family", "Bodoni");
    button.style("font-size", "48px");
    button = createImg('assets/meme.png');
    button.size(100, 100);
    button.position(innerWidth - 1000, innerHeight + 200);

    // random colors
    redColor1 = random(255), greenColor1 = random(255), blueColor1 = random(255);

    redColor2 = random(255), greenColor2 = random(255), blueColor2 = random(255);

    redColor3 = random(255), greenColor3 = random(255), blueColor3 = random(255);

    redColor4 = random(255), greenColor4 = random(255), blueColor4 = random(255);

    redColor5 = random(255), greenColor5 = random(255), blueColor5 = random(255);

    redColor6 = random(255), greenColor6 = random(255), blueColor6 = random(255);

    redColor7 = random(255), greenColor7 = random(255), blueColor7 = random(255);

    redColor8 = random(255), greenColor8 = random(255), blueColor8 = random(255);

    redColor9 = random(255), greenColor9 = random(255), blueColor9 = random(255);

    redColor10 = random(255), greenColor10 = random(255), blueColor10 = random(255);

    redColor11 = random(255), greenColor11 = random(255), blueColor11 = random(255);

    redColor12 = random(255), greenColor12 = random(255), blueColor12 = random(255);

    // teacher placement
    createTeacher(50, 100);

    // student 1 placement
    student1[i] = img1;
    studentXSpeeds1 = random(1, 10);
    studentYSpeeds1 = random(1, 10);

    // get a random speed when it first starts for student 1
    for (var i = 0; i < 1; i++) {
        studentXs2[i] = getRandomNumber(1150);
        studentYs2[i] = getRandomNumber(750);
        diameters2[i] = getRandomNumber(20);
    }

    // student 2 placement
    studentXSpeeds2 = random(1, 10);
    studentYSpeeds2 = random(1, 10);

    // get a random speed when it first starts for student 2
    for (var i = 0; i < 1; i++) {
        studentXs2[i] = getRandomNumber(1150);
        studentYs2[i] = getRandomNumber(750);
        diameters2[i] = getRandomNumber(20);
    }

    // student 3 placement
    studentXSpeeds3 = random(1, 10);
    studentYSpeeds3 = random(1, 10);

    // get a random speed when it first starts for student 3
    for (var i = 0; i < 1; i++) {
        studentXs3[i] = getRandomNumber(1150);
        studentYs3[i] = getRandomNumber(750);
        diameters3[i] = getRandomNumber(20);
    }

    // student 4 placement
    studentXSpeeds4 = random(1, 10);
    studentYSpeeds4 = random(1, 10);

    // get a random speed when it first starts for student 4
    for (var i = 0; i < 1; i++) {
        studentXs4[i] = getRandomNumber(1150);
        studentYs4[i] = getRandomNumber(750);
        diameters4[i] = getRandomNumber(20);
    }

    // student 5 placement
    studentXSpeeds5 = random(1, 10);
    studentYSpeeds5 = random(1, 10);

    // get a random speed when it first starts for student 5
    for (var i = 0; i < 1; i++) {
        studentXs5[i] = getRandomNumber(1150);
        studentYs5[i] = getRandomNumber(750);
        diameters5[i] = getRandomNumber(20);
    }

    // student 6 placement
    studentXSpeeds6 = random(1, 10);
    studentYSpeeds6 = random(1, 10);

    // get a random speed when it first starts for student 6
    for (var i = 0; i < 1; i++) {
        studentXs6[i] = getRandomNumber(1150);
        studentYs6[i] = getRandomNumber(750);
        diameters6[i] = getRandomNumber(20);
    }

    // student 7 placement
    studentXSpeeds7 = random(1, 10);
    studentYSpeeds7 = random(1, 10);

    // get a random speed when it first starts for student 7
    for (var i = 0; i < 1; i++) {
        studentXs7[i] = getRandomNumber(1150);
        studentYs7[i] = getRandomNumber(750);
        diameters7[i] = getRandomNumber(20);
    }

    // student 8 placement
    studentXSpeeds8 = random(1, 10);
    studentYSpeeds8 = random(1, 10);

    // get a random speed when it first starts for student 8
    for (var i = 0; i < 1; i++) {
        studentXs8[i] = getRandomNumber(1150);
        studentYs8[i] = getRandomNumber(750);
        diameters8[i] = getRandomNumber(20);
    }

    // student 9 placement
    studentXSpeeds9 = random(1, 10);
    studentYSpeeds9 = random(1, 10);

    // get a random speed when it first starts for student 9
    for (var i = 0; i < 1; i++) {
        studentXs9[i] = getRandomNumber(1150);
        studentYs9[i] = getRandomNumber(750);
        diameters9[i] = getRandomNumber(20);
    }

    // student 10 placement
    studentXSpeeds10 = random(1, 10);
    studentYSpeeds10 = random(1, 10);

    // get a random speed when it first starts for student 10
    for (var i = 0; i < 1; i++) {
        studentXs10[i] = getRandomNumber(1150);
        studentYs10[i] = getRandomNumber(750);
        diameters10[i] = getRandomNumber(20);
    }
}