function preload() {
    // stationary images
    playground = loadImage('assets/playground.png')
    grass = loadImage('assets/grass.jpg')

    // special font types
    myFont = loadFont('assets/fonts/Festive-Regular.ttf')
    myFont2 = loadFont('assets/fonts/Schoolbell-Regular.ttf')

    // swings
    swings = loadStrings("./assets/animations/swings/swings.txt");

    // court
    court = loadStrings("./assets/animations/court/court.txt");

    // child
    child = loadStrings("./assets/animations/child/child.txt");

    // merry-go-round
    merry = loadStrings("./assets/animations/merry/merry.txt");
}

function setup() {
    createCanvas(displayWidth - 150, displayHeight - 140);
 
    // swings
    for (let i = 0; i < swings.length; i++) {
        var img = loadImage('assets/animations/swings/' + swings[i])
        swingset = new imageClass(img, 0, 0);
        swingsetObjects[i] = swingset;
    }

    // court
    for (let i = 0; i < court.length; i++) {
        var img = loadImage('assets/animations/court/' + court[i])
        var basketball = new imageClass(img, 0, 0);
        courtObjects[i] = basketball;
    }

    // child
    for (let i = 0; i < child.length; i++) {
        var img = loadImage('assets/animations/child/' + child[i])
        var confusedChild = new imageClass(img, 0, 0);
        childObjects[i] = confusedChild;
    }

    // merry-go-round
     for (let i = 0; i < merry.length; i++) {
        var img = loadImage('assets/animations/merry/' + merry[i])
        var wheelofDeath = new imageClass(img, 0, 0);
        merryObjects[i] = wheelofDeath;
    }
 
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

    // random color values
    redColor1 = random(255), greenColor1 = random(255), blueColor1 = random(255);

    redColor2 = random(255), greenColor2 = random(255), blueColor2 = random(255);

    redColor3 = random(255), greenColor3 = random(255), blueColor3 = random(255);

    redColor4 = random(255), greenColor4 = random(255), blueColor4 = random(255);

    // student placement and number of students on playground
    for (var i = 0; i < 20; i++){
     students[i] = new myStudents(random(1, 10), random(1, 10), getRandomNumber(20), random(255), random(255), random(255), getRandomNumber(1150), getRandomNumber(750))

    }
}