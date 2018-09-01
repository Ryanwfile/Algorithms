//Smallest Common Multiple

//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//I used this video  https://www.youtube.com/watch?v=itPtMtdEPis   after completing I watched this video https://www.youtube.com/watch?v=LpGgtkmRvqc  and tried again, need to add //noprotect to first line in fcc as it breaks other browsers
//https://www.wikihow.com/Find-the-Least-Common-Multiple-of-Two-Numbers  specifically Method 4 Euclid's Alogorithm
smallestCommon = arr =>{//this algorithm is copied almost verbatim from the linked video since after 10 hours I couldn't pinpoint how to get the lcm of a sequence of numbers, figured out how to get the lcm of 2 numbers instantly
let min = Math.min(arr[0], arr[1]);
let max = Math.max(arr[0], arr[1]);
let range = [];
  for (let i = min; i<=max; i++){
    range.push(i);
  }
  let mod = 2 % 1;
  let val1 = min;
  let lcm;
  for (let i = 1; i<range.length; i++){//3,4,5
    let val2 = range[i];//4//5
    let val3 = val1;
    while (val1 && val2)
      {
        if(val1 > val2){//val1 3, val2 4
          val1 = val1 % val2; //3 % 4
          //console.log(val1, val2);
        }
        else {
            val2 = val2 % val1;// 
           // console.log(val1, val2);
        }      
      }
       val1 = val3 * range[i]/(val1 + val2);// this is the crucial step to understanding this algorithm, without it the val1 value keeps getting reset
    //console.log(val1);
  }  
  return val1;
}

console.log(smallestCommon([23, 18]))

/*-------------------------------------------------2nd solution----------------------------------------------*/
// steps for solving least common multiple
// 1 first sort the array, then create an array that contains all of the values in the range from min to max
// 2 create a boolean variable that determines if a quotient has a remainder or not
// 3 declare the lcm variable
// 4 use the boolean variable in a while loop and increase the lcm variable by 1 each loop iteration
// 5 create a for loop to iterate the range array using the min and max numbers as the iterator value, if range is 4, 9 then use var i = 4, i is < 9
// 6 if the lcm variable % the array[i] value is not 0, then break the loop so it can move on to another number
// 7 the final else statement should check that the iterator has reached the last index, if so change the boolean variable to break the while loop
// 8 lastly return the lcm variable
function smallestCommons(arr){
  arr = arr.sort(function(a,b){
    return a -b;
  });
 var range = [];
  for (var idx = arr[0]; idx<=arr[arr.length - 1]; idx++){
    range.push(idx);
  }
  var test = true;
  var lcm = 0;
  while(test){
    lcm++;
    for (var i = range[0]; i<= range[range.length - 1];i++){
      if(lcm % i !== 0){
        break;//if the number is not a multiple break the loop
      }
      else if (i == range[range.length -1]){
        test = false;
      }
    }
  }
  return lcm;
}

console.log(smallestCommon([23, 18]));