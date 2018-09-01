/*Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array. */

dropElements = (arr, func) =>{ 
  let newArr;  
  for (let i =0; i< arr.length; i++){   
      if(func(arr[i])){//checks if the function at each index returns true, if so the array is sliced off and the loop breaks;
        newArr = arr.slice(i)
        break;
      }
    else newArr = [];
  }  
  return newArr;
}
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))