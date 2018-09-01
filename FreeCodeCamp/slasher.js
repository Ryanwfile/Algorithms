//Slasher
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

slasher = (arr, howMany) => {
  let newArr = arr.slice(howMany);
  return newArr;
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));