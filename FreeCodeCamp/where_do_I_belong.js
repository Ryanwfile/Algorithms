//Where Do I Belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

getIndexToIns = (arr, num) =>{
  let test;
  arr.sort(function(a,b){
    return a - b;
  })
  let count = true;
  arr.map(idx = idx =>{
    if (arr[arr.length-1] < num){
      arr.push(num);
      test = arr.length - 1;
      count = false;
    }
    else if(idx >= num && count){
      test = arr.indexOf(idx);
      arr.splice(test, 0, num);
      count = false;
    }    
  })
  return test;//returns the index of where to splice the second argument into an array, to get the array with the splice return arr here instead of test
}
console.log(getIndexToIns([2, 5, 10], .5));