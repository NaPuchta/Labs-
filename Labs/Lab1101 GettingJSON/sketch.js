var data;

// confused as to why this is required in order for the data to run?
// there is no correlation between the two functions one is to collect
// the data and the other is to make a canvas on the screen ???
function setup(){
  // creating the canvas vv
  var cnv = createCanvas (800,800);
  cnv.position((windowWidth-width)/ 2, 30);
  background(5,5,5);
  fill(200,30,150);
  // this is loading in the data from the population.json
  loadJSON("population.json", loadingData)
}

function loadingData(incomingData){
  // giving the incomingData a variable "data"
  data = incomingData;
  // this should be the bubble sorting function call vv
  bubbleSort(data)
}

// the draw function to make the bars vv
function draw(){
  starty = 5
// need to add the same bars part so that each bar is drawn
  for(var i = data.length - 1; i >=; i--){
    for(var j = 0; j < data.length; j++){
      // takes the total number of females
      lenofbar = data[j].females
      rect(2, starty, lenofbar, 3);
      // creates a rect the length of the number of females
      starty = starty + 3
      // so that the next start will be y = 8 not y = 5 again
      // note to self to add text somehow? not really sure how to fit
      // text that is so small into the bars, perhaps try and instead
      // fill in text above? or to the right of the bar
      // text will say "Country: _____" and "Females: #"
    }
  }
}

// bubble sorting function
function bubbleSort(data){
  // starts at the end of the list vv
	for(var i = data.length - 1; i >= 1; i--){
    // moves to the beginning vv
		for(var j = 0; j < data.length; j++){
      // checks to see if number of females is higher vv
      // calls data, goes into country data [j] and goes into females
			if(data[j].females > data[j+1].females){
				tempor = data[j+1];
				data[j+1] = data[j];
				data[j] = tempor;
        // this should go through the whole list
			}
		}
	}
  // logs the end result of the data
  console.log(data);
}
