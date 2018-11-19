// these are the global variables
// dimensions of the food and the snake vv
var w = 20;
// global variable for columbs and rows vv
var cols, rows;
// global variable for the snake vv
var snake;

function setup() {
  // this is the setup code
  var cnv = createCanvas(800, 800);
  // creates columbs and rows for the cube to go in (eventually of course)
  cols = width/w;
  rows = height/w;
  // creates the number of columbs possible (not the actual columbs however)
  cnv.position((windowWidth-width)/2, 30);
  frameRate(10)
  // decreases the frameRate to 1 so that the cube moves at a slower pace
  background(20, 20, 20);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}

//  draw function creates the snake
// draw function also will include calling the food
function draw() {
  snake.run();
}

// checks to see if the keys are pressed to make the cube move
function keyPressed(){
  // this is for the up arrow (the others should go along the same lines as well)
  if(keyCode === UP_ARROW){
    // takes velocity - and creates vector with 0 (not changing x
    //  changing y to a negative to go up)
    snake.vel = createVector(0,-1*w);
  }
  if(keyCode === DOWN_ARROW){
    // take velocity and creates vector with 0 (not changing // x
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
