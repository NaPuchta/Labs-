
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
    // the update function checks to see if the food is eaten by the Snake
    // if so then the food will dissapear and re appear somewhere else
    // most likely will use a function for the exception of the food
    // change the locs to random within this function (too much of a hassle
    // to change random out side of this function)
  }

  this.render = function(){
    // the render function creates the cube of food and gives its dimensions
    // food will be red in color
  }
}

// perhaps create score function in here otherwise create a new js file that is specific
// to the score and adds score every time the food is eaten
// it might prove to be a little too complicated however if too many js files are
// added and attempted to get strewn together
