/*
** PaddleBall Game
** Naomi Puchta
** Oct 10, 2018
*/

// global Variables
var balls = [];
var paddle;
var round = 0;
var number = 4;

// this is the setup code for the program
function setup(){
	// this is the canvas vv
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	loadBalls(number);
	// loads a certain amount of balls ^^
	paddle = new Paddle(createVector(5,10) , 33 , color(255,0,0));
	// adds a paddle to the game ^^
}

function draw() {
	background(20,20,20,90);
	paddle.run();
	for(var i = 0; i < balls.length; i = i + 1){
		// runs the balls vv
		balls[i].run();
	}
	for (var i = balls.length - 1; i >= 0; i--){
		if(balls[i].loc.x > paddle.loc.x &&
			balls[i].loc.x < paddle.loc.x + 80 &&
			balls[i].loc.y > paddle.loc.y &&
			balls[i].loc.y < paddle.loc.y + 20){
				balls.splice(i,1)
			}
		}
	}

	function loadBalls(numballs){
		for(var i = 0; i < numballs; i++){
			// the dimensions of the balls: location, velocity, radius and color vv
			var loc = createVector (random(width),1);
			var vel = createVector(random(-3,3), random(-3,3));
			var radius = 20;
			var col = color(random(255),random(255),random(255));
			var gameBall = new Ball(loc,vel,radius,col);
			// creates a new ball ^^
			balls.push(gameBall);
			// pushes the ball into the array "balls" ^^
		}
	}
