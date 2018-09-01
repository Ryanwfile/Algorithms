let largestOfArr = arr => arr.map(singleArray => {
  let highestNum = 0;
  (singleArray.map(num => { 
    if (num > highestNum){
      highestNum = num;
    }   
  }));
   return highestNum;
})

console.log(largestOfArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1], [26, 15, 100, 25, 999], [987, 5420, 619, 12000, 5499199]]));