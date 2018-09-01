//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr){
  let results = arr;
  for (var i = 0; i<arguments.length;i++){
    results = (results.filter(index => index !== arguments[i]));    
  }
  return results;
}
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));