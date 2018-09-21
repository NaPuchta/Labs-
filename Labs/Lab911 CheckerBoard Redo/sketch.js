/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares = [];
var squareSize = 100;
canvasSize = 800;
boardsize = 8;

// put setup code here
function setup() {
  var cnv = createCanvas(canvasSize, canvasSize);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each square
}

function loadSquares(){
  var colors = [color(0,0,0),color(255,255,255)]
  for(var row = 0; row < boardsize;row ++){
    for(var col = 0; col < boardsize; col++){
      squares.push(new Sqr(createVector(col*squareSize, row*squareSize), squareSize, colors[(row+col)%2]));
    }

  }
  }
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
