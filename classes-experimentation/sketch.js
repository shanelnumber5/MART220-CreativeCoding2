var cowgirl;
var animation = [];
var cowGirlObjects = [];
var i = 0;
var x = 0;
var counter = 0;

function preload() {

    for (var i = 0; i < cowGirlObjects.length; i++) {
        animation[i] = cowGirlObjects[i].getImage();
        
    }

}

// create the canvas
function setup() {

    createCanvas(641, 542);
    setInterval(incrementIndex, 50);
    for(var i = 0; i < 5; i++){
        cowgirlImage[i] = new cowgirlImage(('assets/Idle (1).png', 0, 0), ('assets/Idle (2).png', 0, 0), ('assets/Idle (4).png', 0, 0), ('assets/Idle (5).png', 0, 0),
        ('assets/Idle (6).png', 0, 0), ('assets/Idle (7).png', 0, 0), ('assets/Idle (8).png', 0, 0), ('assets/Idle (9).png', 0, 0), ('assets/Idle (10).png', 0, 0)); cowGirlObjects[i] = cowgirl;
    }
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    for(var i = 0; i < cowgirlImage.length; i++)
    {
        cowgirlImage[i].draw();
    }

    // draw each frame based on the index in the array

    
        image(animation[i], cowGirlObjects[i].getX(), cowGirlObjects[i].getY());
    
}

function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}




