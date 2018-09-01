/*Quicksort 
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. 
The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling
the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding
of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes 
make it a popular and useful sorting method.
https://www.youtube.com/watch?v=COk73cpQbFQ&index=6&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U  great explanation of quicksort
https://www.youtube.com/watch?v=0KBvaKc__rc&t=26s   this video is near identical to how I did the algorithm using the first video's help, this video led me to the spread operator on the return instead of another variable*/

function quickSort(arr) {
  if (arr.length <= 1){
    return arr;
  }
  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];
  for (var i = 0;i<arr.length -1;i++){
    if(arr[i]<= pivot){
      left.push(arr[i]);
    }
    else{
      right.push(arr[i]);
    }
  } 
  return [...quickSort(left), pivot, ...quickSort(right)];//adding the spread operator removes the array brackets from appearing over and over, they could be removed in other ways as well such as a flatten nested array reduce method
}
console.log(quickSort([32, 1, 56, 43, 4, 23, 10, 63, 23]));//43, 2, 55, 1, 234, 92, 123, 2, 163, 123, 43, 2, 55, 1, 234, 92, -5, 25, -16]));