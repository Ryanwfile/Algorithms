//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arrIn){
  let arr = [];
  let arrSplice = [];
  for (let i =0; i< arguments.length; i++){
    arr.push(arguments[i]);
  }
   var flattened = arr.reduce(
  (accumulator, currentValue ) => accumulator.concat(currentValue),
  []
); 
  
  for (let i = 0; i<flattened.length; i++){
    if(flattened.indexOf(flattened[i]) == i){
      arrSplice.push(flattened[i]);
    }
  }  
   return arrSplice;    
  }
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));