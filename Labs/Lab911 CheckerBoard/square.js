

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(x,y){
  this.loc = location;
  this.w = sideLength;
  thos.col = clr;

//  Add instance variables to your constructor Function
//What does a square need to know about itself??
  this.render = function(){
    fill(clr);
    rect(this.loc.x, this.loc.y, this.w)


}
//  End of Square constructor function
