/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var tempor = 0
n = 20

function preload(){
	// p5 has a function named "loadStrings"
	txt = ['dog','cat','lizard','wolf','emu','ostrich','camel','horse']
}

function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	fill(0,255,0)
	text('Before Sort: ' + txt, 10, 20);
	bubbleSort(txt);
}

function bubbleSort(txt){
	for(var i = txt.length - 1; i >= 1; i--){
		for(var j = 0; j < txt.length; j++){
			if(txt[j] > txt[j+1]){
				console.log(txt);
				n = n + 20
				fill(255)
				text(txt, 10, n)
				tempor = txt[j+1];
				txt[j+1] = txt[j];
				txt[j] = tempor;
			}
		}
	}
	fill(255,0,0)
	n = n + 20
	text('After Sort: ' + txt, 10, n)
}
