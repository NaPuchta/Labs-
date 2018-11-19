
//  This is a comment
//  The setup function function is called once when your program begins

var w;
var cols, rows;
var snake;

function setup() {
  // this is the setup code
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
  snake.run();
  console.log(snake)
}

//  The draw function is called @ 30 fps
function draw() {
  snake.run();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel - createVector(0,-1*w);
  }
}
