/*Merge Sort
Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively
easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays
from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally
sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final
sorted array of all the elements. The steps of merge sort are:
1) Recursively split the input array in half until a sub-array with only one element is produced.
2) Merge each sorted sub-array together to produce the final sorted array.
Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively 
easy to implement.

https://www.youtube.com/watch?v=4VqmGXwpLqc
https://www.youtube.com/watch?v=JSceec-wEyw
https://www.youtube.com/watch?v=o1V9J3QR1ZQ */

function mergeSort(arr) {
  if (arr.length === 1){//if the array is length 1 stop the recursion
    return arr;
  }
  var mid = Math.round(arr.length/2);//create a variable to hold the midpoint of each array, if odd the left half will be longer length
  var a = arr.splice(0,mid);//create array from 0 index to midpoint
  var b = arr;  //create array from midpoint to end
  a = mergeSort(a);  //invoke the mergeSort function on left array
  b = mergeSort(b);//invoke mergeSort on right array
  return merge(a,b); //recursively go through each array until they are broken into single element arrays
}
  function merge(left,right){
  var c = [];//empty array to hold the results 
    while(left.length >= 1 && right.length >= 1){//if both halves have elements in them
    if(left[0] > right[0]){//compares each half arrays 0 indexes, if the right array's 0 index is lower the value is pushed to end of c array and removed from the right array
      c.push(right[0]);
      right.shift();
    }
    if(right[0] >= left[0]){//compares each half arrays 0 index, if the left array's 0 index is less than OR EQUAL then it is pushed to the c array and removed from left array
      c.push(left[0]);
      left.shift();
    }
  }//after this while loop finished one of the arrays will be empty, check which array still has elements with the following 2 while conditions
  while(left.length >= 1){
    c.push(left[0]);
    left.shift();
  }
  while(right.length >= 1){
    c.push(right[0]);
    right.shift();
  } 
  return c;
}
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));