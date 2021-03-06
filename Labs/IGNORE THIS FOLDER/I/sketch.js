// ----- these are all of the global variables -----

// dimensions of the food and the snake vv
var w = 20;
// global variable for columbs and rows vv
var cols, rows;
// 40 cols 40 rows ^^
var food;
// global variable for the snake vv
var snake;
// this is the head of the snake
var segments = [];
// these are the body parts of the snake
var locheadx;
var locheady;
// head location
// temporary variables (IGNORE)
var tempox;
var tempoy
var tempox2;
var tempoy2;
// vv is the score
var score = 0;
var collide = false;
// location of the head of the snake
var gaveOver = 0;
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
  // adding here an "if key === s"
  snake = new Snake(createVector(width/2, height/2), createVector(20,0));
  segments.push(createVector(width/2, height/2))
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
  // checks before anything if gameover is true to stop program
  background(0, 0, 0, 300);
  food.run();
  if(collide === false){
  snake.run();
  }
  // this is checking to see if the snake intersects with itself
  if(snake.loc.x === food.loc.x & food.loc.y === snake.loc.y){
    food.loc.x = round(random(40))*20
    food.loc.y = round(random(40))*20
    // checking to see if the food appears inside of the head first
    if(food.loc.x === snake.loc.x & food.loc.y === snake.loc.y){
      food.loc.x = food.loc.x - round(random(10))*20
      food.loc.y = food.loc.y - round(random(10))*20
      // then adding to change it up
      food.loc.x = food.loc.x + round(random(10))*20
      food.loc.y = food.loc.y + round(random(10))*20
    }
    // now checking to see if the food appears inside of the tail
    for(var i = 0; i < segments.length; i++){
      if(food.loc.x === segments[i].x & food.loc.y === segments[i].y){
        food.loc.x = food.loc.x - round(random(10))*20
        food.loc.y = food.loc.y - round(random(10))*20
      }
    }
    templength = segments.length - 1
    segments.push(createVector(segments[templength].x, segments[templength.y] ))
    // this is adding score vv
    score = score + 10;
  }
  fill(255)
  text('Score: ' + score, 10, 20);
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
