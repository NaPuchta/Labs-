/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
function preload(){
	// p5 has a function named "loadStrings"
	txt = loadStrings("word.txt");
}

function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	bubbleSort(txt);
}

function bubbleSort(listing){
	for(var i = txt.length - 1; i >= 1; i--){
		for(var j = 0; j < txt.length; j++){
			if(txt)

		}
	}
}
