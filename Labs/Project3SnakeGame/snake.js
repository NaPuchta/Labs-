
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
    if(collide === false){
      locheadx = this.loc.x;
      locheady = this.loc.y;
      // head loc ^^
      // (saves location)
      this.loc.add(this.vel);
      // keeps the cube within the dimensions of the screen vv
      this.loc.x = constrain(this.loc.x, 0, width - w);
      this.loc.y = constrain(this.loc.y, 0, height - w);
    }
  }

  this.render = function(){
    if(collide === false){
      // if collide is false continue normally ^^
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
        // changes the first snake part to the head of the snakes location
        // however when it is not the first (after saving the first)
        // its a loop
      }
      for(var i = 0; i < segments.length; i++){
        if(snake.loc.x === segments[i].x & snake.loc.y === segments[i].y){
          segments = [];
          collide = true;
          // so this is where if there is a collision the collide turns to true
          // so that the snake game can end
        }
      }

    }
  }
} // end of the snake function
