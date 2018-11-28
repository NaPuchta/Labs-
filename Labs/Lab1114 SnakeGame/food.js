
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
    this.loc.x = constrain(this.loc.x, 0, width - 21);
    this.loc.y = constrain(this.loc.y, 0, height - 21);
    // keeps it within the boundaries of the screen (not sure if this matters
    // for the food as much since it is not moving around like the snake)
    if(this.loc.x === snake.loc.x & this.loc.y === snake.loc.y){
      this.loc.x = round(random(40))*20
      this.loc.y = round(random(40))*20
      // changes coordinates if both x and y coords are the same
      // make sure to add score and figure out a way to connect snake size
      // segments.push(createVector(width/2, height/2))
    }
    // the update function checks to see if the food is eaten by the Snake
    // if so then the food will dissapear and re appear somewhere else
    // most likely will use a function for the exception of the food
    // change the locs to random within this function (too much of a hassle
    // to change random out side of this function)
  }

  this.render = function(){
    fill(0,0,255);
    rect(this.loc.x, this.loc.y, w, w);
    // the render function creates the cube of food and gives its dimensions
    // food will be red in color
  }
}

// perhaps create score function in here otherwise create a new js file that is specific
// to the score and adds score every time the food is eaten
// it might prove to be a little too complicated however if too many js files are
// added and attempted to get strewn together
