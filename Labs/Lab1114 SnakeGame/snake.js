
function Snake(loc,vel){

  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.vel.mult(w);
    this.loc.add(this.vel);
    // keeps the cube within a certain amount
    this.loc.x = constrain(this.loc.x, 0, width - w);
    this.loc.y - constrain(this.loc.y, 0, height - w);
  }

  this.render = function(){
    fill(255);
    rect(this.loc.x, this.loc.y, w, w);
  }


} // end of the snake function
