/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var boids = [];
var chaser;

// put setup code here
function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	LoadBoid(50);
	// creates a chaser ball
	chaser = new Ball(createVector(5,10) , 33 , color(0,0,255));
}

function draw() {
	// runs the chaser
	background(255);
	for(var i = 0; i < boids.length; i = i + 1){
		// runs all of the boids
		boids[i].run();
	}
	// To get rid of dead boids
	for (var i = 0; i < boids.length; i++){
		var x = boids[i];
		var y = chaser.loc;
		var z = x.loc;
		// Distance
		var dist = y.dist(z);
		if(dist <= 10){
			boids.splice(i,1)
			// ^^ This is what is removing the boid itself
		}
		chaser.run();
	}
}

function LoadBoid(numboids){
	for(var i = 0; i < numboids; i = i + 1){
		var loc = createVector(random(width),random(width));
		var vel = createVector(random(-3, 3), random(-3, 3));
		var rad = 20;
		var col = color(255,0,0);
		var boid = new Boid(loc, vel, rad, col);
		boids.push(boid);
	}
	// checks to see whats in the array
	console.log(boids)
	console.log(chaser)
}
