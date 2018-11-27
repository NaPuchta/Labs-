
function Snake(loc,vel){
  // gives the location of velocity of the snake
  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    // calls both of these functions below vv
    // somewhere right here add code for segments before it's updated
    // then possibly call a different run function to draw the snake (perhaps
    // get a new js file for it?)
    this.update();
    this.render();

  }

  this.update = function(){
    locheadx = this.loc.x
    locheady = this.loc.y
    // saves location
    // adding the location to the velocity to make the snake move? (again not quite sure)
    this.loc.add(this.vel);
    // keeps the cube within the dimensions of the screen
    // should work for top bottom left and right
    this.loc.x = constrain(this.loc.x, 0, width - 21);
    this.loc.y = constrain(this.loc.y, 0, height - 21);

  }

  this.render = function(){
    // gives the color and dimensions of the snake
    fill(255);
    rect(this.loc.x, this.loc.y, w, w);
    for(var i = 0; i > segments; i++){
      loc1x = segments[0].loc.x
      loc1y = segments[0].loc.y
      // saves coords of the first seg
      segments[0].loc.x = locheadx
      segments[0].loc.y = locheady
      // changes first seg to head loc
      locx = segments[i].loc.x;
      locy = segments[i].loc.y;


    }
    // once this first piece renders the rest will be pushed and rendered
    // put an "if hits food" here otherwise infinite segments will be made
    // segments.push(new Segment(this.loc, this.vel));
  }


} // end of the snake function
