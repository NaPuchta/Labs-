// ----- these are all of the global variables -----

// dimensions of the food and the snake vv
var w = 20;
// global variable for columbs and rows vv
var cols, rows;
// 40 cols 40 rows ^^
var food;
// the food that pops up on the screen ^^
var snake;
// this is the head of the snake ^^
var segments = [];
// these are the body parts of the snake ^^
var locheadx;
var locheady;
// head locations (x and y)^^
// temporary variables (IGNORE) vv
var tempox;
var tempoy
var tempox2;
var tempoy2;
// vv is the score
var score = 0;
var collide = false;
// when collide is true game will end var ^^
var gameStart = 0;
// if w is pressed this will go to 1 to start the game ^^

// ----- this is the setup function ------

function setup(){
  var cnv = createCanvas(800, 800);
  // creates columbs and rows for the snake to go in vv
  cols = width/w;
  rows = height/w;
  // There are 40 cols and 40 rows in this screen
  cnv.position((windowWidth-width)/2, 30);
  frameRate(10)
  // decreases the frameRate to slow down snake (so its not speeding around)
  background(226, 206, 231);
  snake = new Snake(createVector(width/2, height/2), createVector(20,0));
  // creation of the snake head ^^
  segments.push(createVector(width/2, height/2))
  // adding the first piece of the body to the array ^^
  food = new createFood(createVector(round(random(40))*20,round(random(40))*20));
  // creates the food ^^
}

// ----- this is the draw function -----

//  draw function calls for the snake and food to run
// draw function also will include checking for food collision
// on top of this the title screen and end screen is made here
// and finally the food is checked to make sure it is not drawn in the snake
function draw() {
  rect(200, 250, 400, 200)
  text('WELCOME!', 250, 300);
  text('THIS IS THE SNAKE GAME!!', 250, 350);
  text('TO PLAY PRESS THE W BUTTON ON YOUR KEYBOARD!', 250, 370)
  if(keyCode === 87){
    gameStart = 1
  }
  // checks to see if game started
    // checks before anything if gameover is true to stop program
    if(gameStart === 1){
      background(226, 206, 231, 300);
      food.run();
      // if there is no snake collision then continue vv
      if(collide === false){
      snake.run();
      }
      // this is checking to see if the snake intersects with food
      if(snake.loc.x === food.loc.x & food.loc.y === snake.loc.y){
        food.loc.x = round(random(40))*20
        food.loc.y = round(random(40))*20
        // gives new location ^^
        // if the food keeps spawning in the snake head it will repeat until it
        // is out vv
        while(food.loc.x === snake.loc.x & food.loc.y === snake.loc.y){
        food.loc.x = round(random(40))*20
        food.loc.y = round(random(40))*20
        }
        // now checking to see if the food appears inside of the tail vv
        for(var i = 0; i < segments.length; i++){
          if(food.loc.x === segments[i].x & food.loc.y === segments[i].y){
            food.loc.x = round(random(40))*20
            food.loc.y = round(random(40))*20
          }
          //  ^^ though there is still a change that the food will appear inside
          // of the tail the chances are much slimmer now
        }
        templength = segments.length - 1
        segments.push(createVector(segments[templength].x, segments[templength.y] ))
        // this is adding score vv 
        score = score + 10;
      }
      // this is where the score is displayed vv
      fill(255)
      text('Score: ' + score, 10, 20);
      // this is the end screen vv
      if(collide === true){
        rect(200, 250, 400, 200)
        food.loc.x = 900
        food.loc.y = 900
        fill(0)
        text('GAME OVER!', 320, 300);
        text(' YOUR SCORE WAS: ' + score, 320, 350);
        text('TO PLAY AGAIN REFRESH THE PAGE!!', 320, 370)
    }
  }
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
