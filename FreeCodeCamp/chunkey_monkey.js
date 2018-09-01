//Chunkey Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups = (arr, size) => {
  let newArray = [];
  for (let i = 0; i< arr.length; i+= size){
    let newIndex = arr.slice(i, i + size)
    newArray.push(newIndex);
    
  }
  return newArray;
  }
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));