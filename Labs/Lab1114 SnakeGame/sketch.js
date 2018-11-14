
//  This is a comment
//  The setup function function is called once when your program begins

var w;
var col, row;
var snake;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  col = width/w;
  row = height/w;
  background(5, 5, 5);
  fill(200, 30, 150);
  snake = new Snake(createVector(width/2, height/2),createVector(1,0))
}

//  The draw function is called @ 30 fps
function draw() {
  snake.run()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel - createVector(0,-1*w);
  }
}
