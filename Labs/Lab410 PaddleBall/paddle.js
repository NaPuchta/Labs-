/*
**  Boid Constructor Function
**  Naomi Puchta
**  Aug 21, 2018
*/

// note what i want to do here is use the ball from the collison lab to create
// a paddle that moves around, it won't intercept the balls yet or anything
// just get the base down
function Paddle(loc, vel, rad, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  this.isDead = false;

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
    var dis = this.loc.dist(chaser.loc);
    if(dis < 100){
      var steeringForce = p5.Vector.sub(this.loc,chaser.loc);
      steeringForce.normalize();
      steeringForce.mult(0.09);
      this.vel.add(steeringForce);
    }
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
     push() // saves current coordinate system
     translate(this.loc.x, this.loc.y);
     rotate(this.vel.heading() + radians(90));
      fill(this.col);
      triangle(-5,0,5,0,0,-15);
      pop()
   }


}
