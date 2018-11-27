// ----- these are all of the global variables -----

// dimensions of the food and the snake vv
var w = 20;
// global variable for columbs and rows vv
var cols, rows;
// 40 cols 40 rows ^^
var food;
// global variable for the snake vv
var snake;
var segments = [];
var locheadx;
var locheady;
// location of the head of the snake
var foodseg = false;
// if food is touched this will become true ^^

// ----- this is the setup function ------

function setup(){
  // this is the setup code
  var cnv = createCanvas(800, 800);
  // creates columbs and rows for the cube to go in (eventually of course)
  cols = width/w;
  rows = height/w;
  // creates the number of columbs possible (not the actual columbs however)
  cnv.position((windowWidth-width)/2, 30);
  frameRate(10)
  // decreases the frameRate to 1 so that the cube moves at a slower pace
  background(0, 0, 0);
  snake = new Snake(createVector(width/2, height/2), createVector(0,0));
  // add something for the segments here (add the first piece to the array)
  food = new createFood(createVector(round(random(40))*20,round(random(40))*20));
  // the food function is rounded because with random it goes through all
  // possible decimals, rounding keeps it in the cols and rows
  // 40 possible rows, picks a row and multiplies by the size of the square
}

// ----- this is the draw function -----

//  draw function creates the snake
// draw function also will include calling the food
function draw() {
  // so that only one cube will show up
  background(0, 0, 0, 300);
  snake.run();
  food.run();
}

// ----- this is the keyPressed function -----

// checks to see if the keys are pressed to make the cube move
function keyPressed(){
  // this is for the up arrow (the others should go along the same lines as well)
  if(keyCode === UP_ARROW){
    // takes velocity - and creates vector with 0 (not changing x
    //  changing y to a negative to go up)
    snake.vel = createVector(0,-1*w);
  }
  if(keyCode === DOWN_ARROW){
    // take velocity and creates vector with 0 (not changing x
    // changing y to a positive to go down)
    snake.vel = createVector(0,1*w);
  }
  if(keyCode === LEFT_ARROW){
    // velocity - create vector negative x and 0 for y
    snake.vel = createVector(-1*w,0);
  }
  if(keyCode === RIGHT_ARROW){
    // velocity = create vector positive x and 0 for y
    snake.vel = createVector(1*w,0);
  }
}
