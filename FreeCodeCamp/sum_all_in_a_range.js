//Sum All Numbers in an Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

sumAll = arr =>{
  let newArr = [];
  if(arr[0] > arr[1]){
    let temp0 = arr[0];
    let temp1 = arr[1];    
    newArr.push(temp1);
    newArr.push(temp0);    
  }
  else {
    newArr = arr;   
  }
   for(var i = newArr[0]; i<newArr[1] - 1;i++){       
    newArr.push(i + 1);    
  }  
  const reducer = (acc, current) =>{
    return acc + current;
  }
  return newArr.reduce(reducer);
}

console.log(sumAll([10, 5]));