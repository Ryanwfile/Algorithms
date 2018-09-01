//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

//Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym(args){
  var diff = undefined;
  for (var i = 0; i< arguments.length; i++){ 
     if (arguments[i + 1]){
     if (!diff){
        var a = arguments[i];//i
        var b = arguments[i+ 1];//i + 1
        var c = (a.filter(idx => b.indexOf(idx) == -1)).concat(b.filter(idx2 => a.indexOf(idx2) == -1));      
        diff = c;
     }
     else {
        var a = arguments[i];//i
        var b = arguments[i+ 1];//i + 1
        diff = (diff.filter(idx => b.indexOf(idx) == -1)).concat(b.filter(idx2 => diff.indexOf(idx2) == -1));
        for (var j = 0; j < diff.length; j++){
         if (diff.indexOf(diff[j]) !== j){
           diff.splice(j, 1);
         }
        }       
       }  
     }
  }
  return diff.sort(function(a,b){
    return a - b;
  }) ; 
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); 