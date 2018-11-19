
function Snake(loc,vel){
  // gives the location of velocity of the snake
  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    // calls both of these functions below vv
    this.update();
    this.render();
  }

  this.update = function(){
    // adding the location to the velocity to make the snake move? (again not quite sure)
    this.loc.add(this.vel);
    // keeps the cube within the dimensions of the screen
    // should work for top bottom left and right
    this.loc.x = constrain(this.loc.x, 0, width - w);
    this.loc.y = constrain(this.loc.y, 0, height - w);

  }

  this.render = function(){
    // gives the color and dimensions of the snake
    fill(255);
    rect(this.loc.x, this.loc.y, w, w);
  }


} // end of the snake function
