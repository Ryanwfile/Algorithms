/*Bubble Sort
My sort algorithms are aided by the Harvard CS50 videos  https://www.youtube.com/watch?v=RT-hUXUWQ2I

The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end,iterating 
through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of
order.  The method continues looping through the array until no swaps occur at which point the array is sorted.*/
function bubbleSort(array) {
  var swapCounter = -3;//initialize a swapcounter variable to any non 0 integer
  function swap(arr, pos1, pos2){    
      var temp = arr[pos1];
      arr[pos1] = arr[pos2];
      arr[pos2] = temp;    
  }
  while (swapCounter !== 0)
    {
      swapCounter = 0;
      for (var i = 0; i<array.length;i++){      
      if (array[i + 1] < array[i])        
        swap(array, i,(i + 1) );
        swapCounter ++;    
      } 
    }  
  return array;
}
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));