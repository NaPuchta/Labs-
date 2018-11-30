
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
    locheadx = this.loc.x;
    locheady = this.loc.y;
    // head loc ^^
    // push both into array vv
    // saves location
    // adding the location to the velocity to make the snake move? (again not quite sure)
    this.loc.add(this.vel);
    // keeps the cube within the dimensions of the screen
    // should work for top bottom left and right
    this.loc.x = constrain(this.loc.x, 0, width - w);
    this.loc.y = constrain(this.loc.y, 0, height - w);
    // for restart
    // if(this.loc.y === 0 & keyCode === UP_ARROW){
      // gameOver = true;
      // add something here where if the gameover is true snake
      // no longer moves
      // repeat process for all directions
      // very confused on segments still, I am unable to figure out
      // what the possible solution would be since separate
      // arrays clearly don't work to draw multiple shapes..
    // }

  }

  this.render = function(){
    // gives the color and dimensions of the snake
    fill(255);
    rect(this.loc.x, this.loc.y, w, w);
    for(var i = 0; i < segments.length; i++){
      // saves seg first ^^
      if(i > 0){
        tempox = segments[i].x
        tempoy = segments[i].y
        segments[i].x = tempox2
        segments[i].y = tempoy2
        tempoy2 = tempoy
        tempox2 = tempox
        rect(segments[i].x, segments[i].y, w, w)
      }
      if(i === 0){
        tempox2 = segments[i].x
        tempoy2 = segments[i].y
        segments[0].x = locheadx
        segments[0].y = locheady
        rect(segments[0].x, segments[0].y, w, w)
      }
    }
  }
} // end of the snake function
