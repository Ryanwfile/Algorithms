//Difference of Two Arrays(Symmetric Difference)
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

diffArray = (arr1, arr2) =>{
  return ((arr1.filter(idx => arr2.indexOf(idx) == -1))).concat(arr2.filter(idx2 => arr1.indexOf(idx2) == -1));
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))