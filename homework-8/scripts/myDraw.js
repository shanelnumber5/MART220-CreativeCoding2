function draw() {
    teacher.debug = mouseIsPressed;

    //if no arrow input set velocity to 0
    teacher.velocity.x = (mouseX - teacher.position.x) / 10;
    teacher.velocity.y = (mouseY - teacher.position.y) / 10;

    //teacher collides against all the sprites in the group obstacles
    teacher.collide(obstacles);

    //I can define a function to be called upon collision, overlap, displace or bounce
    //see collect() below
    teacher.overlap(collectibles, collect);

    //if the animation is "sad" and it reached its last frame
    if (teacher.getAnimationLabel() == 'happy' && teacher.animation.getFrame() == teacher.animation.getLastFrame()) {
        teacher.changeAnimation('sad');
    }

    //I can define a function to be called upon collision, overlap, displace or bounce
    //see collect() below
    teacher.overlap(bumpresult, createParticles);

    //if the animation is "sad" and it reached its last frame
    if (teacher.getAnimationLabel() == 'sad' && teacher.animation.getFrame() == teacher.animation.getLastFrame()) {
        teacher.changeAnimation('bumpresult');
    }

    background(grass);
    drawSprites();

    //timer
    textSize(80);
    stroke(5);
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

    //text 
    textSize(30);
    stroke(5);
    fill(redColor2, greenColor2, blueColor2);
    textFont(myFont);
    text("Shanel Locke", width / 2 + 700, height / 2 + 460);

    textSize(60);
    textFont(myFont2);
    text("The Teacher - Recess Duty", width / 2 - 490, height / 2 - 420);

    textSize(40);
    textFont(myFont2);
    fill(redColor1, greenColor1, blueColor1);
    text("(You Have 60 Seconds to Collect All the Students)", width / 2 + 470, height / 2 - 420);

    //scroreboard
    stroke(5);
    strokeWeight(7);
    fill(redColor1, greenColor1, blueColor1);
    textFont("font-family", "Bodoni");
    textSize(30);
    text('COLLECTED CHILDREN:', width / 6, 120);
    text(score, width / 3.5, 120);

}