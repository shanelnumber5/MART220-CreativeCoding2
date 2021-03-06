function draw() {
    background(grass);

    // animate the sprite sheet
    animation(confused_child, 430, 625);

    /* // child
     image(childObjects[h].getImage(), 13, height / 18, 1350, 1150); */

    // rock obstacles
    //image(rock, 100, 100);
    //image(rock2, 200, 200);

    drawSprites();

    // playground
    image(playground, 800, height / 11, playground.width / 12, playground.height / 12);

    // swings
    image(swingsetObjects[s].getImage(), 1300, height / 8, 380, 350);

    /*  // animate the sprite sheet
      animation(excited_child, 585, 845); */

    // merry-go-round
    image(merryObjects[m].getImage(), 780, height / 1.9, 350, 350);

    // basketball court
    image(courtObjects[c].getImage(), 670, height / 2, 1100, 500);

    // timer
    textSize(80);
    fill(redColor1, greenColor1, blueColor1);
    textFont(myFont2);
    strokeWeight(7);

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

    // create fence boundaries
    if (teacherX < 10) {
        teacherX = teacherX + move;
    }

    if (teacherY < 55) {
        teacherY = teacherY + move;
    }

    if (teacherY > height - 80) {
        teacherY = teacherY - move;
    }

    // text 
    textSize(30);
    fill(redColor3, greenColor3, blueColor3);
    textFont(myFont);
    text("Shanel Locke", width / 2 + 700, height / 2 + 460);
    textSize(60);
    textFont(myFont2);
    text("The Teacher - Recess Duty", width / 2 - 490, height / 2 - 420);
    textSize(40);
    textFont(myFont2);
    fill(redColor2, greenColor2, blueColor2);
    text("(You Have 60 Seconds to Collect All the Students)", width / 2 + 470, height / 2 - 420);

    // check to see if the teacher has left the exit
    if (teacherX > width && teacherY > height - 100) {
        stroke(5);
        textSize(50);
        fill(redColor1, greenColor1, blueColor1);
        textAlign(CENTER);
        text("You Saved", width / 2 + 200, height / 2 + 200);
        text("All the Students!", width / 2 + 200, height / 2 + 250);
    }

    // right fence
    fill(173, 166, 147)
    rect(width - 10, fenceY, fenceWidth, height - 100);

    if (teacherX > (width - 10) - fenceWidth - 45 && teacherX < (width - 10) + (height - 100) && teacherY > fenceY - (height - 100) && teacherY < fenceY + (height - 100)) {
        move = move * -1;
    } else {
        move = 5;
    }

    // draw students
    strokeWeight(1);
    for (var i = 0; i < students.length; i++) {
        students[i].draw()
        if (students[i].getX() >= width) {
            studentSpeedsX = random(1, 10);
            students[i].setspeedX(-studentSpeedsX)
        }
        if (students[i].getX() <= 0) {
            studentSpeedsX = random(1, 10);
            students[i].setspeedX(studentSpeedsX)
        }
        if (students[i].getY() >= height) {
            studentSpeedsY = random(1, 10);
            students[i].setspeedY(-studentSpeedsY)
        }
        if (students[i].getY() <= 0) {
            studentSpeedsY = random(1, 10);
            students[i].setspeedY(studentSpeedsY)
        }
        students[i].setX(students[i].getX() + students[i].getspeedX());
        students[i].setY(students[i].getY() + students[i].getspeedY());
    }


}