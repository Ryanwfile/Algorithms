//Sum All Odd Fibonacci Numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

sumFibs = num =>{
  let fibArr = [1];//1,1,2,3,5,8  
  let previous = 1;
  let current = 1;
  let total = 0;
  for (let i = 0; current<=num; i++){//uses previous, current, and total values to push the correct sequence of fibonacci numbers to an array.  Uses the for loop condition to be sure the highest current value is always less than or equal to num
    fibArr.push(current);//1
    total = previous + current;//2
    previous = current;//1
    current = total;//2      
  }
  let reducer = fibArr.reduce( (total, currentValue) =>{//uses the reduece method to add up all of the values in the array that are odd
    if (currentValue % 2 === 1){
      return total += currentValue;
    }
    else{
      return total;
    }
  });
return reducer;
}
console.log(sumFibs(75024));//60696