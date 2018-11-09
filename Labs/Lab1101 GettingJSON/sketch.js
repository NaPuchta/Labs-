var data;

// confused as to why this is required in order for the data to run?
// there is no correlation between the two functions one is to collect
// the data and the other is to make a canvas on the screen ???
function setup(){
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

// the draw function vv
function draw(){

}

// bubble sorting function
function bubbleSort(data){
	for(var i = data.length - 1; i >= 1; i--){
		for(var j = 0; j < data.length; j++){
      // checks to see if number of females is higher vv
			if(data.countrydata[j].females > data.countrydata[j+1].females){
				tempor = data.countrydata[j+1];
				data.countrydata[j+1] = data.countrydata[j];
				data.countrydata[j] = tempor;
			}
		}
	}
  // logs the end result of the data
  console.log(data);
}
