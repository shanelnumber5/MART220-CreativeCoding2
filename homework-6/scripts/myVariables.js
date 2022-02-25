// x and y for the teacher
var teacherX = 0,
    teacherY = 100;

// defined key codes for each letter
// teacher movement
var UP_ARROW = 38,
    DOWN_ARROW = 40,
    LEFT_ARROW = 37,
    RIGHT_ARROW = 39;

// students
var studentX = 0,
    studentY = 0,
    students = [],
    studentSpeedsX = [],
    studentSpeedsY = [];

// text color when teacher exits the game and timer
var redColor1, greenColor1, blueColor1;

// instructions text color
var redColor2, greenColor2, blueColor2;

// title and signiture text color
var redColor3, greenColor3, blueColor3;

// random teacher color 
var redColor4, greenColor4, blueColor4;

// decorative images
let playground;
let grass;

// fonts
let myFont;
let myFont2;

// timer
var timerValue = 0,
    startButton;

// swings
var swings, 
swingsetObjects = [],
s = 0,
counter = 0;

// court
var court,
courtObjects = [],
c = 0,
counter2 = 0;

// merry-go-round
var merry,
merryObjects = [],
m = 0,
counter3 = 0;

// merry-go-round
var child,
childObjects = [],
h = 0,
counter4 = 0;