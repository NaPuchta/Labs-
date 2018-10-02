/*
**  Boid Constructor Function
**  Naomi Puchta
**  Aug 21, 2018
*/

function Boid(loc, vel, rad, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the boid
  // by adding speed to x and y
  this.update = function(){
    this.loc.add(this.vel);
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = - this.vel.x;
    if(this.loc.x > width) this.vel.x = - this.vel.x;
    if(this.loc.y < 0) this.vel.y = - this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

    // render() draws the ball at the new location
   this.render = function(){
      fill(this.col);
      triangle(this.loc.x,this.loc.y,this.loc.x +8,this.loc.y + 8,this.loc.x + 16,this.loc.y + 16);
   }

}
