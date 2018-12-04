
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
    // there really isnt anything in here I mostly did everything in the draw
    // function
  }

  this.render = function(){
    fill(231,88,116);
    rect(this.loc.x, this.loc.y, w, w);
    // the render function creates the cube of food and gives its dimensions
    // food will be red in color
  }
}

// perhaps create score function in here otherwise create a new js file that is specific
// to the score and adds score every time the food is eaten
// it might prove to be a little too complicated however if too many js files are
// added and attempted to get strewn together
