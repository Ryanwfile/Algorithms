/*Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
NOTE: This function doesn't perform the same in codepen as in other consoles
this video helped me a lot https://www.youtube.com/watch?v=HggkXmfXUlk once I got stuck, but the main issue was the codepen console not behaving similar to other consoles */

function addTogether(){
  var params = [];
  for (var i = 0; i<arguments.length; i++){
    params.push(arguments[i]);
  }
  var notNum = params.filter(function(idx) {
    return typeof idx !== "number";
  });    
 
  params = params.filter(function(idx) {
    return typeof idx == "number";
  });    
  
  if(notNum.length > 0){
    return undefined;
  }
  
   else if (params.length === 2){
     return params[0] + params[1];   
   }
  
  else {
    var firstParam = params[0];
    var recall = function(secondParam){
      return addTogether(firstParam, secondParam);
    };
    return recall;
  }   
}

addTogether(2,3);