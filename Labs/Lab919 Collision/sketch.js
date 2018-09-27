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
	chaser = new Ball(createVector(0,0),33,color(255,0,0));
	draw();
// method call ^^
}

function draw() {
	chaser.run();
	for(var i = 0; i < boids.length; i = i + 1){
		boids[i].run();
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
	console.log(boids)
}
