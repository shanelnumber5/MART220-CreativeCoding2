function draw() {
    background(grass);

    // playground
    image(playground, 800, height / 11, playground.width / 12, playground.height / 12);

    // child
    image(childObjects[h].getImage(), 13, height / 18, 1350, 1150);

    // animate the sprite sheet
    animation(explode_animation, 600, 600);

    // swings
    image(swingsetObjects[s].getImage(), 1300, height / 8, 380, 350);

    // basketball court
    image(courtObjects[c].getImage(), 670, height / 2, 1100, 500);

    // merry-go-round
    image(merryObjects[m].getImage(), 800, height / 3, 350, 350);

    // timer
    strokeWeight(5);
    textSize(80);
    fill(redColor1, greenColor1, blueColor1);
    textFont(myFont2);

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
        console.log(students[i].getY());
        students[i].setX(students[i].getX() + students[i].getspeedX());
        students[i].setY(students[i].getY() + students[i].getspeedY());
    }
}