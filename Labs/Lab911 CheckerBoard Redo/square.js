

/*
**  Square Constructor Function::
**  Naomi Puchta
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, sideLength, clr){
  this.w = location;
  this.loc = sideLength;
  this.clr = clr;
//  Add instance variables to your constructor Function
//What does a square need to know about itself??

  this.render = function(){
    fill(this.col);
    Rect(this.locX, this.locY, this.w, this.w);
  }

}//  End of Square constructor function
