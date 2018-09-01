function sumAll(arr){
  let total = 0;
  let diff = arr[1] - arr[0]; 
  if (diff > 0)  
  {
    for (let i = 0; i<=diff; i++){      
      total += (arr[0] + i);     
    }    
  }
  else {
    diff = diff * (-1);
    for (let i = 0; i<=diff; i++){      
     total += (arr[0] - i);     
    }    
  }
  return total;
};
console.log(sumAll([10,5]));