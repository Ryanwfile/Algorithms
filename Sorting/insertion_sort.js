/*Insertion Sort
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating 
through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time
complexity in the average and worst cases.  
https://learn.freecodecamp.org/coding-interview-prep/algorithms/implement-insertion-sort */

 function insertionSort(array) {
  for (var i = 0; i<array.length; i++){
    var spliced = array.splice(0, i + 1);
    if (spliced[i] < spliced[i - 1]){//if the newest number in the array is less than the preceding number it goes through a for loop that starts from start of spliced to determine the new value's proper place
      for (var j = 0; j<spliced.length; j++){
        if (spliced[i] < spliced[j]){
          var temp = spliced[j];
          spliced[j] = spliced[i];
          spliced[i] = temp;         
        }
      }
    }
    array = spliced.concat(array);    
  }  
  return array;
}
console.log(insertionSort([32, 1, 5643, 4, 2, 63, 123, 43, 2, 55, 1, 234, 92, 123, 2, 163, 123, 43, 2, 55, 1, 234, 92, -5, 25, -16]));//[-16, -5, 1, 1, 1, 2, 2, 2, 2, 4, 25, 32, 43, 43, 55, 55, 63, 92, 92, 123, 123, 123, 163, 234, 234, 5643]