//Finders Keepers
//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

findElements = (arr, func) =>{
  return arr.filter(func)[0];
}
console.log(findElements([1, 3, 5, 9], function(num) { return num % 2 === 0; }));