
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
    for(var i = segments.length - 1; i > 1; i--){
      locx = segments[i-1].x
      locy = segments[i-1].y
      // saving close to head segment
      segments[i].x = locx;
      segments[i].y = locy;
    }
    // push both into array vv
    // saves location
    // adding the location to the velocity to make the snake move? (again not quite sure)
    this.loc.add(this.vel);
    // keeps the cube within the dimensions of the screen
    // should work for top bottom left and right
    this.loc.x = constrain(this.loc.x, 0, width - 21);
    this.loc.y = constrain(this.loc.y, 0, height - 21);
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
    rect(locheadx, locheady, w, w);
    for(var i = segments.length - 1; i > 1; i--){
      rect(segments[i].x, segments[i].y, w, w)
    }

  //   //none of this here seemed to work at all
  //   for(var i = segments - 1; i > -1; i--){
  //     if(i === 0){
  //       segments[0].loc.x = locheadx
  //       segments[0].loc.y = locheady
  //     }
  //     else{
  //       locx = segments[i-1].loc.x;
  //       locy = segments[i-1].loc.y;
  //       // saving closer to head segment
  //       segment[i].loc.x = locx;
  //       segment[i].loc.x = locx;
  //     }
  //   // fill(255);
  //   // rect(segments[i].loc.x, segments[i].loc.y, w, w)
  //   // }
  //   // //once this first piece renders the rest will be pushed and rendered
  //   //put an "if hits food" here otherwise infinite segments will be made
  //   //segments.push(new Segment(this.loc, this.vel));
  }
  //

} // end of the snake function
