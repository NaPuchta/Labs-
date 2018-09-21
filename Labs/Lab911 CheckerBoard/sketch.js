/*
**Lab 911:CheckerBoard
**
**
*/
var squares = [];
var numberOfSquares = 8;
var squareSize;

//  Global variables
// Declare squares[] as a global variable


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  squareSize = width/numberOfSquares;
  // Create a function that loads the squares into an
  // array of square objects and call the function
  loadSquares(8);
  //  traverse array and run each square
  for (var i = 0; i < squares.length; i++){
    squares[i].render();
  }
}

  //  create a square object and push it into the squares array
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
function loadSquares(){
  var rowNum = 0;
  var colNum = 0;
  for(var row = 0; row < 8; row++){
    var x = 100*col
    for (var co l= 0; col < 8; col++){
      var y = 100*color
      var loc = createVector(x,y);
      var clr;
      if((row+col)%2==0){
        clr = color(0,0,0);
      }
      else{
        clr = color(255,255,255);
      }
      var w = 
    }
  }
}
