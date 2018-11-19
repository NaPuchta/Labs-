
//  This is a comment
//  The setup function function is called once when your program begins

var w = 20;
var cols, rows;
var snake;

function setup() {
  // this is the setup code
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(1)
  background(20, 20, 20);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}

//  draw function creates the snake
function draw() {
  snake.run();
}

// checks to see if the keys are pressed to make the cube move
function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel - createVector(0,-1*w);
  }
}
