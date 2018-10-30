/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var bars = [];
numb = 5

//put setup code here
function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(205);
	// calling function to load bars vv
	loadBars(5)
}

// this loads in the bars
function loadBars(amount){
	for(var i = 0; i < amount; i++){
		// this identifies what size and color the bar will be vv
		var loc = createVector(random(width), random(height));
		var col = color(random(225),random(225),random(225));
		bars.push(new Bars(loc, vel, radius, col));
	}
}
