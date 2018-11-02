var data;
//  preload a large file
function preload(){
  data = loadJSON("thedata.json");

  function setup(){
     console.log(data)
  }
