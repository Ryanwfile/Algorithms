/*Selection Sort

Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the 
second element. It continues iterating through the list and swapping elements until it reaches the end of the 
list.  Now the list is sorted. Selection sort has quadratic time complexity in all cases.*/

function selectionSort(array) {   
  var swap = function(arr,pos1,pos2){
     var temp = arr[pos1];
     arr[pos1] = arr[pos2];
     arr[pos2] = temp;  
   }   
  for (var i =0; i<array.length; i++){
    var slicer = array.slice(i);   
     var min = slicer.reduce(function(a, b) {
      return Math.min(a, b);
    });    
    var idx = slicer.indexOf(min);
    idx = idx + i;
    console.log(idx);    
    if (idx > i){
      swap(array,i,idx);
    }    
  } 
  return array;
 }
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))