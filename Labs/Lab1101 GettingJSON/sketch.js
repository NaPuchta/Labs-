var data;

// confused as to why this is required in order for the data to run?
// there is no correlation between the two functions one is to collect
// the data and the other is to make a canvas on the screen ???
function setup(){
  var cnv = createCanvas (800,800);
  cnv.position((windowWidth-width)/ 2, 30);
  background(5,5,5);
  fill(200,30,150);
  loadJSON("population.json", loadingData)
}

function loadingData(incomingData){
  data = incomingData;
}
