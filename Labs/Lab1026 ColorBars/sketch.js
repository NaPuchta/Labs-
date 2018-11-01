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

<<<<<<< HEAD
// this loads in the bars

function loadBars(numbars){
	for(var i = 0; i < numbars; i++){
		var loc = createVector(random(width),random(height));
		var clr = color(random(255),random(255),random(255));
		bars.push(new ColorBar(loc,clr));
	}
}

function bubbleSort(){
	var length = bars.length
	for(var i = length - 1; i > 0; i--){
		for(var j = 0; j < i; j++){
			if(bars[j] > bars[j+1]){
			var tmp = bars[j];
			bars[j] = bars[j+1];
			bars[j+1] = tmp;
			}
		}
	}
}

function draw(){
	background(20, 20, 20, 15);
	for(var i = 0; i < bars.length; i++){
		bars[i].run();
	}
}



/* function loadBars(amount){
=======
// this loads in the bars vv
function loadBars(amount){
>>>>>>> 97363c75310bf7a9cf5ab8d58a198b8f267cd945
	for(var i = 0; i < amount; i++){
		// this identifies what size and color the bar will be vv
		var loc = createVector(xloc,yloc);
		var col = color(random(225),random(225),random(225));
<<<<<<< HEAD

		bars.push(new Bars(loc, vel, radius, col));
	}
}
*/
=======
		bars.push(new Bars(loc,col));
		// pushing bars into bar array
	}
}

// Need to change a lot, figure out tomorrow..
>>>>>>> 97363c75310bf7a9cf5ab8d58a198b8f267cd945
