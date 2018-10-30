/*
**  Word Sort Function
**  Naomi Puchta
**  Oct 23, 2018
*/

// this creates the bars and puts them in the random order at the top
function Bars(){

}

// this will be the bubble sorting method vv
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


// not quite sure how select sort will work so I'll have to go home and
// figure it out vv
// function selectSort(){
// }
