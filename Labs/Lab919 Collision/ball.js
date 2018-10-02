/*
**  Ball Constructor Function
**  Naomi Puchta
**  Aug 21, 2018
*/

function Ball(loc, rad, col){
  // Instance variables
  this.loc = loc;
  this.rad = rad;
  this.col = col;

  // This function calls other functions
  this.run = function(){
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
     var mouseLoc = createVector(mouseX, mouseY);
     this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

    // render() draws the ball at the new location
   this.render = function(){
      fill(this.col);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);

   }

}
