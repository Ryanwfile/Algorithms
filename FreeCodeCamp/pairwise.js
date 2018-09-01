/*Pairwise
https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.
7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise

//my steps
1st: Go through the array and find out which numbers add up to the arg
2nd: Once a number is used be sure to not include it in further calculations, not sure how to accomplish this while still being sure every possible pair is accounted for, might have to do this step AFTER to be 100% accurate
3rd: Be sure that all duplicate elements use the lower indice first
4th: Pair all of the elements with their corresponding index value
6th: Return the sum the index values of all of the pairs */

function pairwise(arr, arg) {
  var idxArr = [];
  var valArr = [];
  for (var i = 0; i<arr.length;i++){
    for (var j = 0; j<arr.length;j++){//iterate through the array adding each value to on another
      if (arr[i] + arr[j] === arg && idxArr.indexOf(i) < 0 && idxArr.indexOf(j) < 0 && i !== j){//push the pairs into the idxArr if they haven't been included yet
        idxArr.push(i)
        idxArr.push(j);
        valArr.push(arr[i]);
        valArr.push(arr[j]);
      }
    }
  }
  if (idxArr.length > 0){//if the idxArr has any pairs at all add them up and return this value
      return idxArr.reduce(function(acc, val){
    return acc + val;
  });     
  } else {//if idxArr is empty returns 0
       return 0;
    }   
}

console.log(pairwise([1, 3, 2, 4], 4));