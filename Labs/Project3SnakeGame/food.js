
// the createFood function will be made here where a random location will
// be given from the sketch function

function createFood(loc){
  // only loc to know origin
  this.loc = loc;
  // run function here with the update and render functions inside
  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.loc.x = constrain(this.loc.x, 0, width - w);
    this.loc.y = constrain(this.loc.y, 0, height - w);
    // adding the constrain just in case it goes off of the screen
    // this happened a couple of times 
  }

  this.render = function(){
    fill(231,88,116);
    rect(this.loc.x, this.loc.y, w, w);
    // the render function creates the cube of food and gives its dimensions ^^
    // the dimensions will change each time
  }
}
