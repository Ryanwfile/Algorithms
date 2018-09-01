//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

steamrollArr = arr =>{  
  let flatten = arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue),[]);
  let found = flatten.find(function(element) {
    return Array.isArray(element);
  });
  if (found){
    return steamrollArr(flatten);
  }  
  return flatten;
}
console.log(steamrollArr([1, {}, [3, [[4]]]]));