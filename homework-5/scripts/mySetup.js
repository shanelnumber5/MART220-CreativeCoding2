function preload() {
    playground = loadImage('assets/playground.png')
    grass = loadImage('assets/grass.jpg')

    myFont = loadFont('assets/fonts/Festive-Regular.ttf')
    myFont2 = loadFont('assets/fonts/Schoolbell-Regular.ttf')

    // swings
    swingset = new imageSwings('assets/animations/swings/swings-1.png', 0, 0);
    swingsetObjects[0] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-2.png', 0, 0);
    swingsetObjects[1] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-3.png', 0, 0);
    swingsetObjects[2] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-4.png', 0, 0);
    swingsetObjects[3] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-5.png', 0, 0);
    swingsetObjects[4] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-6.png', 0, 0);
    swingsetObjects[5] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-7.png', 0, 0);
    swingsetObjects[6] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-8.png', 0, 0);
    swingsetObjects[7] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-9.png', 0, 0);
    swingsetObjects[8] = swingset;
    swingset = new imageSwings('assets/animations/swings/swings-10.png', 10, 10);
    swingsetObjects[9] = swingset;

    for (var s = 0; s < swingsetObjects.length; s++) {
        animation1[s] = swingsetObjects[s].getImage1();

    }

    // court
    court = new imageCourt('assets/animations/court/court-1.png', 0, 0);
    courtObjects[0] = court;
    court = new imageCourt('assets/animations/court/court-2.png', 0, 0);
    courtObjects[1] = court;
    court = new imageCourt('assets/animations/court/court-3.png', 0, 0);
    courtObjects[2] = court;
    court = new imageCourt('assets/animations/court/court-4.png', 0, 0);
    courtObjects[3] = court;
    court = new imageCourt('assets/animations/court/court-5.png', 0, 0);
    courtObjects[4] = court;
    court = new imageCourt('assets/animations/court/court-6.png', 0, 0);
    courtObjects[5] = court;
    court = new imageCourt('assets/animations/court/court-7.png', 0, 0);
    courtObjects[6] = court;
    court = new imageCourt('assets/animations/court/court-8.png', 0, 0);
    courtObjects[7] = court;
    court = new imageCourt('assets/animations/court/court-9.png', 0, 0);
    courtObjects[8] = court;
    court = new imageCourt('assets/animations/court/court-10.png', 10, 10);
    courtObjects[9] = court;
    court = new imageCourt('assets/animations/court/court-11.png', 0, 0);
    courtObjects[10] = court;
    court = new imageCourt('assets/animations/court/court-12.png', 0, 0);
    courtObjects[11] = court;
    court = new imageCourt('assets/animations/court/court-13.png', 0, 0);
    courtObjects[12] = court;
    court = new imageCourt('assets/animations/court/court-14.png', 0, 0);
    courtObjects[13] = court;
    court = new imageCourt('assets/animations/court/court-15.png', 0, 0);
    courtObjects[14] = court;
    court = new imageCourt('assets/animations/court/court-16.png', 0, 0);
    courtObjects[15] = court;
    court = new imageCourt('assets/animations/court/court-17.png', 0, 0);
    courtObjects[16] = court;
    court = new imageCourt('assets/animations/court/court-18.png', 0, 0);
    courtObjects[17] = court;
    court = new imageCourt('assets/animations/court/court-19.png', 0, 0);
    courtObjects[18] = court;
    court = new imageCourt('assets/animations/court/court-20.png', 10, 10);
    courtObjects[19] = court;
    court = new imageCourt('assets/animations/court/court-21.png', 0, 0);
    courtObjects[20] = court;
    court = new imageCourt('assets/animations/court/court-22.png', 0, 0);
    courtObjects[21] = court;
    court = new imageCourt('assets/animations/court/court-23.png', 0, 0);
    courtObjects[22] = court;
    court = new imageCourt('assets/animations/court/court-24.png', 0, 0);
    courtObjects[23] = court;
    court = new imageCourt('assets/animations/court/court-25.png', 0, 0);
    courtObjects[24] = court;
    court = new imageCourt('assets/animations/court/court-26.png', 0, 0);
    courtObjects[25] = court;
    court = new imageCourt('assets/animations/court/court-27.png', 0, 0);
    courtObjects[26] = court;
    court = new imageCourt('assets/animations/court/court-28.png', 0, 0);
    courtObjects[27] = court;
    court = new imageCourt('assets/animations/court/court-29.png', 0, 0);
    courtObjects[28] = court;
    court = new imageCourt('assets/animations/court/court-30.png', 10, 10);
    courtObjects[29] = court;
    court = new imageCourt('assets/animations/court/court-31.png', 0, 0);
    courtObjects[30] = court;
    court = new imageCourt('assets/animations/court/court-32.png', 0, 0);
    courtObjects[31] = court;
    court = new imageCourt('assets/animations/court/court-33.png', 0, 0);
    courtObjects[32] = court;
    court = new imageCourt('assets/animations/court/court-34.png', 0, 0);
    courtObjects[33] = court;
    court = new imageCourt('assets/animations/court/court-35.png', 0, 0);
    courtObjects[34] = court;
    court = new imageCourt('assets/animations/court/court-36.png', 0, 0);
    courtObjects[35] = court;
    court = new imageCourt('assets/animations/court/court-37.png', 0, 0);
    courtObjects[36] = court;
    court = new imageCourt('assets/animations/court/court-38.png', 0, 0);
    courtObjects[37] = court;
    court = new imageCourt('assets/animations/court/court-39.png', 0, 0);
    courtObjects[38] = court;
    court = new imageCourt('assets/animations/court/court-40.png', 10, 10);
    courtObjects[39] = court;
    ('assets/animations/court/court-41.png', 10, 10);
    courtObjects[40] = court;

    for (var c = 0; c < courtObjects.length; c++) {
        animation2[c] = courtObjects[c].getImage2();
    }

    // merry-go-round
    merry = new imageMerry('assets/animations/merry/merry-1.png', 0, 0);
    merryObjects[0] = merry;
    merry = new imageMerry('assets/animations/merry/merry-2.png', 0, 0);
    merryObjects[1] = merry;

    for (var m = 0; m < merryObjects.length; m++) {
        animation3[m] = merryObjects[m].getImage3();

    }

    // child
    child = new imageChild('assets/animations/child/child-1.png', 0, 0);
    childObjects[0] = child;
    child = new imageChild('assets/animations/child/child-2.png', 0, 0);
    childObjects[1] = child;
    child = new imageChild('assets/animations/child/child-3.png', 0, 0);
    childObjects[2] = child;
    child = new imageChild('assets/animations/child/child-4.png', 0, 0);
    childObjects[3] = child;
    child = new imageChild('assets/animations/child/child-5.png', 0, 0);
    childObjects[4] = child;
    child = new imageChild('assets/animations/child/child-6.png', 0, 0);
    childObjects[5] = child;
    child = new imageChild('assets/animations/child/child-7.png', 0, 0);
    childObjects[6] = child;
    child = new imageChild('assets/animations/child/child-8.png', 0, 0);
    childObjects[7] = child;
    child = new imageChild('assets/animations/child/child-9.png', 0, 0);
    childObjects[8] = child;
    child = new imageChild('assets/animations/child/child-10.png', 10, 10);
    childObjects[9] = child;
    child = new imageChild('assets/animations/child/child-11.png', 0, 0);
    childObjects[10] = child;
    child = new imageChild('assets/animations/child/child-12.png', 0, 0);
    childObjects[11] = child;
    child = new imageChild('assets/animations/child/child-13.png', 0, 0);
    childObjects[12] = child;
    child = new imageChild('assets/animations/child/child-14.png', 0, 0);
    childObjects[13] = child;
    child = new imageChild('assets/animations/child/child-15.png', 0, 0);
    childObjects[14] = child;
    child = new imageChild('assets/animations/child/child-16.png', 0, 0);
    childObjects[15] = child;
    child = new imageChild('assets/animations/child/child-17.png', 0, 0);
    childObjects[16] = child;
    child = new imageChild('assets/animations/child/child-18.png', 0, 0);
    childObjects[17] = child;
    child = new imageChild('assets/animations/child/child-19.png', 0, 0);
    childObjects[18] = child;
    child = new imageChild('assets/animations/child/child-20.png', 10, 10);
    childObjects[19] = child;
    child = new imageChild('assets/animations/child/child-21.png', 0, 0);
    childObjects[20] = child;
    child = new imageChild('assets/animations/child/child-22.png', 0, 0);
    childObjects[21] = child;
    child = new imageChild('assets/animations/child/child-23.png', 0, 0);
    childObjects[22] = child;
    child = new imageChild('assets/animations/child/child-24.png', 0, 0);
    childObjects[23] = child;
    child = new imageChild('assets/animations/child/child-25.png', 0, 0);
    childObjects[24] = child;
    child = new imageChild('assets/animations/child/child-26.png', 0, 0);
    childObjects[25] = child;
    child = new imageChild('assets/animations/child/child-27.png', 0, 0);
    childObjects[26] = child;
    child = new imageChild('assets/animations/child/child-28.png', 0, 0);
    childObjects[27] = child;
    child = new imageChild('assets/animations/child/child-29.png', 0, 0);
    childObjects[28] = child;
    child = new imageChild('assets/animations/child/child-30.png', 10, 10);
    childObjects[29] = child;
    child = new imageChild('assets/animations/child/child-31.png', 0, 0);
    childObjects[30] = child;
    child = new imageChild('assets/animations/child/child-32.png', 0, 0);
    childObjects[31] = child;
    child = new imageChild('assets/animations/child/child-33.png', 0, 0);
    childObjects[32] = child;
    child = new imageChild('assets/animations/child/child-34.png', 0, 0);
    childObjects[33] = child;
    child = new imageChild('assets/animations/child/child-35.png', 0, 0);
    childObjects[34] = child;
    child = new imageChild('assets/animations/child/child-36.png', 0, 0);
    childObjects[35] = child;
    child = new imageChild('assets/animations/child/child-37.png', 0, 0);
    childObjects[36] = child;
    child = new imageChild('assets/animations/child/child-38.png', 0, 0);
    childObjects[37] = child;
    child = new imageChild('assets/animations/child/child-39.png', 0, 0);
    childObjects[38] = child;
    child = new imageChild('assets/animations/child/child-40.png', 10, 10);
    childObjects[39] = child;
    ('assets/animations/child/child-41.png', 10, 10);
    childObjects[40] = child;

    for (var h = 0; h < childObjects.length; h++) {
        animation4[h] = childObjects[h].getImage4();
    }
}

function setup() {
    createCanvas(displayWidth - 150, displayHeight - 140);

    // teacher placement
    createTeacher(50, 100);

    // timer
    textAlign(CENTER);
    setInterval(timeIt, 1000);
    setInterval(incrementIndex1, 100);
    setInterval(incrementIndex2, 100);
    setInterval(incrementIndex3, 175);
    setInterval(incrementIndex4, 80);

    // back button
    button = createButton("Back");
    button.size(200, 100);
    button.position(width / 2, height / 2 + 470);
    button.style("font-family", "Bodoni");
    button.style("font-size", "48px");
    button = createImg('assets/meme.png');
    button.size(100, 100);
    button.position(width / 2 - 70, height / 2 + 470);


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

    redColor13 = random(255), greenColor13 = random(255), blueColor13 = random(255);

    // student 1 placement
    studentXSpeeds1 = random(1, 10);
    studentYSpeeds1 = random(1, 10);

    // get a random speed when it first starts for student 1
    for (var i = 0; i < 1; i++) {
        studentXs1[i] = getRandomNumber(1150);
        studentYs1[i] = getRandomNumber(750);
        diameters1[i] = getRandomNumber(20);
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