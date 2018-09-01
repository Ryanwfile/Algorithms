/*No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

A lot of this code is a copy of heap's algorithm http://dsernst.com/2014/12/14/heaps-permutation-algorithm-in-javascript/    
which finds all of the possible permutations of a string */

function permAlone(str){
 function repeatTest(arr){   
  var x = true;
  for (var i =0; i<arr.length; i++){
    if (i !== arr.length - 1 && (arr[i].charCodeAt(0) === arr[i + 1].charCodeAt(0))){//Need to account for the last index of hte array
     x = false;
     break;
    }
    else {
      x = true;
    }
  }
  return x;
}

var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};
  
var count = 0;
var heapsPermute = function (array, output, n) {
 
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    if (repeatTest(array)){//this is one of the few sections of my own custom code, most of this is heap's algorithm
      count ++;
    }
  
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};

var print = function(input){  
}
  var splitter = str.split('');
  heapsPermute(splitter,print);
  return count;
}

console.log(permAlone('aaabb'));