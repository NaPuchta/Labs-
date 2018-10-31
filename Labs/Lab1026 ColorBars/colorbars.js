/*
**  Word Sort Function
**  Naomi Puchta
**  Oct 23, 2018
*/

// this creates the bars and puts them in the random order at the top
// really confused at this part, maybe move colors rather than moving
// bars
function Bars(loc,col){
	 // Instance variables
	 this.loc = loc;
	 this.col = col;
}

this.render = function(){
	fill(this.col);
	// fill in with parameters... vv
	rect();
}

// this will be the bubble sorting method vv (will sort by blue value)
function bubbleSort(txt){
	for(var i = txt.length - 1; i >= 1; i--){
		for(var j = 0; j < txt.length; j++){
			if(txt[j] > txt[j+1]){
				console.log(txt);
				// logs the process of switching
				n = n + 20
				fill(255)
				text(txt, 10, n)
				tempor = txt[j+1];
				txt[j+1] = txt[j];
				txt[j] = tempor;
				// some of this code is obviously from the word sort so
				// I need to find a way to change colors through this
				// rather than text
			}
		}
	}

// not quite sure how select sort will work so I'll have to go home and
// figure it out vv
// function selectSort(){
// }
