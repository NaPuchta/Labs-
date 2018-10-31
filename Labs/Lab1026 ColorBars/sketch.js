/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var bars = [];
numb = 5
xloc = 10
yloc =

//put setup code here
function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(205);
	// calling function to load bars vv
	loadBars(5)
	// keeping these numbers small until it's figured out
}

// this loads in the bars vv
function loadBars(amount){
	for(var i = 0; i < amount; i++){
		// this identifies what size and color the bar will be vv
		var loc = createVector(xloc,yloc);
		var col = color(random(225),random(225),random(225));
		bars.push(new Bars(loc,col));
		// pushing bars into bar array
	}
}

// Need to change a lot, figure out tomorrow..
