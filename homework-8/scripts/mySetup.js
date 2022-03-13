function preload() {
    grass = loadImage('assets/grass.jpg');

    //swings
    for (var i = 0; i < 1; i++) {
        var swings = createSprite(1300, 400);
        swings.addAnimation('normal', 'assets/animations/swings/swings-1.png', 'assets/animations/swings/swings-10.png');
    }

    //create a user controlled sprite
    teacher = createSprite(random(0, width + 40), random(0, height + 40));
    teacher.addAnimation('bumpresult', 'assets/teacher/happy.png', 'assets/teacher/happy6.png', 'assets/teacher/sad.png', 'assets/teacher/sad6.png');

    teacher.addAnimation('happy', 'assets/teacher/normal.png', 'assets/teacher/normal6.png', 'assets/teacher/happy.png', 'assets/teacher/happy6.png');

    teacher.addAnimation('sad', 'assets/teacher/normal.png', 'assets/teacher/normal6.png', 'assets/teacher/sad.png', 'assets/teacher/sad6.png');

    //special font types
    myFont = loadFont('assets/fonts/Festive-Regular.ttf');
    myFont2 = loadFont('assets/fonts/Schoolbell-Regular.ttf');
}

function setup() {
    createCanvas(displayWidth - 150, displayHeight - 140);

    //create 3 groups
    obstacles = new Group();
    collectibles = new Group();
    bumpresult = new Group();

    //coughing child
    for (var i = 0; i < 1; i++) {
        var germs = createSprite(1200, 900);
        germs.addAnimation('normal', 'assets/child.png');
        bumpresult.add(germs);
    }

    //upper fence
    for (var i = 0; i < 1; i++) {
        var fence1 = createSprite(width, -70);
        fence1.addAnimation('normal', 'assets/fence.png');
        obstacles.add(fence1);
    }

    //lower fence
    for (var i = 0; i < 1; i++) {
        var fence2 = createSprite(width / 2, height / 2 + 470);
        fence2.addAnimation('normal', 'assets/fence2.png');
        obstacles.add(fence2);
    }

    //left fence
    for (var i = 0; i < 1; i++) {
        var fence3 = createSprite(-20, height);
        fence3.addAnimation('normal', 'assets/fence3.png');
        obstacles.add(fence3);
    }

    //left fence
    for (var i = 0; i < 1; i++) {
        var fence3 = createSprite(width + 20, height);
        fence3.addAnimation('normal', 'assets/fence3.png');
        obstacles.add(fence3);
    }

    //rocks
    for (var i = 0; i < 2; i++) {
        var rocks = createSprite(random(0, width + 40), random(0, height + 40));
        rocks.addAnimation('normal', 'assets/rock.png');
        obstacles.add(rocks);
    }

    for (var i = 0; i < 1; i++) {
        var rock2 = createSprite(random(0, width + 40), random(0, height + 40));
        rock2.addAnimation('normal', 'assets/rock2.png');
        obstacles.add(rock2);
    }

    //slide
    for (var i = 0; i < 1; i++) {
        var slide = createSprite(230, 600);
        slide.addAnimation('normal', 'assets/animations/slide/1.png', 'assets/animations/slide/351.png');
    }

    //students
    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child1.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child2.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child3.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child4.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child5.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child6.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child7.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child8.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child9.png');
        collectibles.add(students);
    }

    for (var j = 0; j <= 0; j++) {
        var students = createSprite(random(0, width + 40), random(0, height + 40));
        students.addAnimation('normal', 'assets/children/child10.png');
        collectibles.add(students);
    }

    //timer
    textAlign(CENTER);
    setInterval(timeIt, 1000);

    //back button
    button = createButton("Back");
    button.size(200, 100);
    button.position(width / 2, height / 2 + 470);
    button.style("font-family", "Bodoni");
    button.style("font-size", "48px");
    button = createImg('assets/meme.png');
    button.size(100, 100);
    button.position(width / 2 - 70, height / 2 + 470);

    //random color values
    redColor1 = random(255), greenColor1 = random(255), blueColor1 = random(255);

    redColor2 = random(255), greenColor2 = random(255), blueColor2 = random(255);

    redColor3 = random(255), greenColor3 = random(255), blueColor3 = random(255);

    redColor4 = random(255), greenColor4 = random(255), blueColor4 = random(255);
}