/*FCC BASIC ALGORITHMS
************************************************************************************************************************************************************************************************************************
Reverse a String

function reverseString(str){
  const newStr = str.split('').reverse().join('');
  return newStr;
}

console.log(reverseString("batcountry"));
************************************************************************************************************************************************************************************************************************
Sum all Integers in an array

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
************************************************************************************************************************************************************************************************************************
Factorialize an Integer
my way
function factorialize(x){
  var product = 1;  
  for (var i = x; i>0; i--){
    product *= i;
  }  
  return product;
}
console.log(factorialize(5));

recursive way
function factorial(n) {
  if (n === 0) {
    return 1;
  }  
  return n * factorial(n - 1);
}
************************************************************************************************************************************************************************************************************************
Check for Palindromes
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

my way
function checkPalindrome(str){
  var noCaps = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
  var reverse = str.split('').reverse().join('').toLowerCase().replace(/[^a-z0-9]+/g, "");  
  return noCaps === reverse;
};

console.log(checkPalindrome("1 eye for of 1 eye."));

more efficient way as the above method looks at an entire string before comparing, the method below compares 2 characters

function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++;
    back--;
  }
************************************************************************************************************************************************************************************************************************
Find the Longest Word

function findLongestWord(str){
  let wordArray = str.split(" ");
  let test = 0;
  wordArray.map(word => {
    if (word.length > test){
      test = word.length;     
    }
  })
  return test;
}

console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
************************************************************************************************************************************************************************************************************************
Title Case a Sentence

let titleCase = str => str.toLowerCase().split(" ").map(word => {
  return (word.slice(0,1).toUpperCase() + word.slice(1));
}).join(" ");

console.log(titleCase("lEaVe The GuN, take The cannolis"));
************************************************************************************************************************************************************************************************************************
Largest Number in each Array

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
************************************************************************************************************************************************************************************************************************
Confirm the Ending of a String
Check if a string (first argument, str) ends with the given target string (second argument, target).

var confirmEnding = (str, target) => {
  return str.endsWith(target);
}

console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
************************************************************************************************************************************************************************************************************************
Repeat a String num times

let repeatStringNumTimes = (str, num) => {
  finalString = '';
  for (var i = 0; i< num;i++){
    finalString += str;
  }
  return finalString;
}

console.log(repeatStringNumTimes("abc", -2));
************************************************************************************************************************************************************************************************************************
Truncate a String 
(first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

truncateString = (str, num) => {
  let newStr = str.substring(0, num);
  if (str.length > num){
    if(num <= 3)
      return newStr + "...";  
    else {
      newStr = newStr.substring(0, num -3) + "...";
    }    
  }
  return newStr;
}

console.log(truncateString("Absolutely Longer", 2));
************************************************************************************************************************************************************************************************************************
Chunkey Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups = (arr, size) => {
  let newArray = [];
  for (let i = 0; i< arr.length; i+= size){
    let newIndex = arr.slice(i, i + size)
    newArray.push(newIndex);
    
  }
  return newArray;
  }
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
************************************************************************************************************************************************************************************************************************
Slasher
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

slasher = (arr, howMany) => {
  let newArr = arr.slice(howMany);
  return newArr;
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
************************************************************************************************************************************************************************************************************************
Mutation
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

mutation = (arr) =>{
  let test; 
  for (let i = 0; i<arr[1].length; i++){
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) >=0)
     {
       test = true; 
     } 
    else
      {       
        test = false;
        break;
      }    
  }
   return test;
}

console.log(mutation(["Alien", "line"]));
************************************************************************************************************************************************************************************************************************
Bouncer
Remove all false values from an array

bouncer = (arr) => {
  const results = arr.filter(index =>Boolean(index) === true);
  return results;
}

console.log(bouncer([0,null, 2, 3, false, NaN, 16, "PA", undefined, "Bacon and eggs","", -252, -0]));
************************************************************************************************************************************************************************************************************************
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr){
  let results = arr;
  for (var i = 0; i<arguments.length;i++){
    results = (results.filter(index => index !== arguments[i]));    
  }
  return results;
}
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
************************************************************************************************************************************************************************************************************************
Where Do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

getIndexToIns = (arr, num) =>{
  let test;
  arr.sort(function(a,b){
    return a - b;
  })
  let count = true;
  arr.map(idx = idx =>{
    if (arr[arr.length-1] < num){
      arr.push(num);
      test = arr.length - 1;
      count = false;
    }
    else if(idx >= num && count){
      test = arr.indexOf(idx);
      arr.splice(test, 0, num);
      count = false;
    }    
  })
  return test;//returns the index of where to splice the second argument into an array, to get the array with the splice return arr here instead of test
}
console.log(getIndexToIns([2, 5, 10], .5));
************************************************************************************************************************************************************************************************************************
Caesar's Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

rot13 = str =>{
  let results = [];
  let cut = str.split("");
  let cipher = cut.map(letter = letter=>{
    return letter.charCodeAt(0);
  })
  
  for (let i =0; i<cipher.length;i++){
    if (cipher[i] < 65 || (cipher >=91 && cipher[i] <= 96)|| cipher[i] > 122){
      cipher[i] = cipher[i]; 
    }
    else if(cipher[i] + 13 > 90 || cipher[i] + 13 > 122){
      cipher[i] -= 13;      
    }
    else {
      cipher[i] +=13;      
    } 
  }
  for (var j = 0; j<cipher.length; j++){
      results.push(String.fromCharCode(cipher[j]));
  }
  return results.join("");
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
************************************************************************************************************************************************************************************************************************
Sum All Numbers in an Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

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
************************************************************************************************************************************************************************************************************************
Difference of Two Arrays(Symmetric Difference)
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

diffArray = (arr1, arr2) =>{
  return ((arr1.filter(idx => arr2.indexOf(idx) == -1))).concat(arr2.filter(idx2 => arr1.indexOf(idx2) == -1));
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))
************************************************************************************************************************************************************************************************************************
Convert to Roman Numerals  (refactor this algorithm)

convertToRoman = num =>{
                  //0    1    2    3    4    5   6   7    8    9    10  11  12
  const arrNum =   [1,   4,   5,   9,  10,  40, 50,  90, 100, 400, 500,900,1000];
  const arrRoman = ["I","IV","V","IX","X", "XL","L","XC","C","CD","D", "CM","M"];
  let romanized = "";
  let output = num;
  let digit;
  let remainder;
  
  if (output >= 1000){
    digit = Math.floor(output/1000);
    remainder = output - (digit * 1000);
    while(digit > 0){
      romanized += "M";
      digit --;
    }
  }  
  if(remainder || remainder === 0){
    output = remainder;
  }  
  if (output >= 900){
    digit = Math.floor(output/900);
    remainder = output - (digit * 900);
    while (digit > 0){
      romanized += "CM";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 500){
    digit = Math.floor(output/500);
    remainder = output - (digit * 500);
    while (digit > 0){
      romanized += "D";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 400){
    digit = Math.floor(output/400);
    remainder = output - (digit * 400);
    while(digit > 0){
      romanized += "CD";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 100){
    digit = Math.floor(output/100);
    remainder = output - (digit * 100);
    while(digit > 0){
      romanized += "C";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 90){
    digit = Math.floor(output/90);
    remainder = output - (digit * 90);
    while(digit > 0){
      romanized += "XC";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 50){
    digit = Math.floor(output/50);
    remainder = output - (digit * 50);
    while (digit > 0){
      romanized += "L";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 40){
    digit = Math.floor(output/40);
    remainder = output - (digit * 40);
    while (digit > 0){
      romanized += "XL";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 10){
    digit = Math.floor(output/10);
    remainder = output - (digit * 10);
    while (digit > 0){
      romanized += "X";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if(output >= 9){
    digit = Math.floor(output/9);
    remainder = output - (digit * 9);
    while (digit > 0){
      romanized += "IX";
      digit --;
    }
  }
  
  if(remainder || remainder === 0){
    output = remainder;
  }  
  if(output >= 5){
    digit = Math.floor(output/5);
    remainder = output - (digit * 5);
    while(digit > 0){
      romanized += "V";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 4){
    digit = Math.floor(output/4);
    remainder = output - (digit * 4);
    while(digit > 0){
      romanized += "IV";
      digit --;
    }
  }
 if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 1){
    digit = Math.floor(output/1);
    remainder = output - (digit * 1);
    while ( digit > 0){
      romanized += "I";
      digit --;
    }
  }
  return romanized;
}

console.log(convertToRoman(798));
************************************************************************************************************************************************************************************************************************
Wherefore art thou
for this algorithm an array of objects is given in the first argument and the algorithm should return an array of the objects that have all of the matching key/value pairs of the 2nd argument

whatIsInAName = (collection, source) => {  
  let matching = collection.filter(sourceMatch = sourceMatch =>{
    let tester;
    for (var i = 0; i< Object.keys(source).length;i++){
      tester = (sourceMatch[Object.keys(source)[i]] === source[Object.keys(source)[i]]);//tests whether or not each key/value pair in the 2nd argument is present in each object of the 1st argument     
    }
    return tester;//returns true only if the key/value pair of the 2nd argument is present in the object of the first argument, prefix tester with a ! to get the non matching key/value pairs
  })  
  return matching;
}
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
************************************************************************************************************************************************************************************************************************
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

myReplace = (str,before,after) =>{   
  let replacer;
  if (before.charAt(0).toLowerCase() == before.charAt(0)){
    replacer = str.replace(before, after);    
  }
  else {
    let firstCharAfter = after.charAt(0);
    firstCharAfter = firstCharAfter.toUpperCase(); 
    after = firstCharAfter + after.substr(1);
    replacer = str.replace(before, after);    
  }
  return replacer; 
}
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
************************************************************************************************************************************************************************************************************************
Piglatin
For this algorithm I created a function to translate any lower case word into piglatin, then I used that functon to create another function that can change an entire sentence into piglatin
note it has to be lower case and words without vowels like "why" don't translate properly

sentences = longStr =>{
  let newPhrase = [];  
 longStr.split(" ").map(word = word =>{
    newPhrase.push(pigLatin(word)); 
  })
  return newPhrase.join(' ');
}

pigLatin = str =>{
  let indexing = [];
  let remove;
  let sliced;
  let piggy = '';
  let arr = str.split('').map(letter = letter =>{
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
      {
        indexing.push(str.indexOf(letter));        
      }
    remove = indexing[0];
  })
  if (remove === 0)
    {
      piggy = str + "way";
    }
  else {    
    sliced = str.substring(0, remove);
    piggy= str.substring(remove) + sliced + "ay";
  } 
  return piggy;
}

console.log(sentences("i don't know, you tell me why gladly created algorithms phased out piglatin, or maybe it was the alcohol"));
**************************************************************************************************************************************************************************************************************************
DNA Pairing
each letter in the string is the first part of a pair, the pairs are GC and AT, return an array with the pairs in tack so GCGA would be [G,C], [C,G],[G,C],[A,T]

pairElement = str =>{
  let dnaArr = str.split('');
  let arr = [];
  dnaArr.map(letter = letter=>{
    switch (letter){
        case "A":
          arr.push(["A,T"]);
          break;
        case "C":
          arr.push(["C","G"]);
          break;
        case "G":
          arr.push(["G","C"]);
          break;
        case "T":
          arr.push(["T","A"]);
          break;
        default:
        break;
    }    
  });
    return arr;    
}
console.log(pairElement("CTCTA"));
**************************************************************************************************************************************************************************************************************************
Missing Letters
This algorithm takes a sequential string and returns the missing letter, if no letter is missing it returns undefined

fearNotLetters = str =>{
  let arr = str.split('');
  let charArr = [];
  let missing = undefined;
  let letter = arr.map(char = char =>{
    charArr.push(char.charCodeAt(0));
  })
  for (let i =1; i<charArr.length; i++){
    if (charArr[i] - 1 === charArr[i - 1]){   
    }
    else {
      missing = String.fromCharCode(charArr[i] - 1);
    }
  }
  return missing;
}
console.log(fearNotLetters("wyz"));
**************************************************************************************************************************************************************************************************************************
Boo who
Returns true if the argument passed is a primitive boolean, meaning if it's false or true, all other values return false

booWho = bool =>{
  if (bool === true || bool === false){
    return true;
  }
  else {
    return false;
  }
}
console.log(booWho("false"));
**************************************************************************************************************************************************************************************************************************
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arrIn){
  let arr = [];
  let arrSplice = [];
  for (let i =0; i< arguments.length; i++){
    arr.push(arguments[i]);
  }
   var flattened = arr.reduce(
  (accumulator, currentValue ) => accumulator.concat(currentValue),
  []
); 
  
  for (let i = 0; i<flattened.length; i++){
    if(flattened.indexOf(flattened[i]) == i){
      arrSplice.push(flattened[i]);
    }
  }  
   return arrSplice;    
  }
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
**************************************************************************************************************************************************************************************************************************************************
Convert HTML entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML = str =>{
  let char = str.charAt(0);
  let newStr = str.replace(/&/g, '&amp;');
   newStr = newStr.replace(/</g, '&lt;');
   newStr = newStr.replace(/>/g, '&gt;');
   newStr = newStr.replace(/"/g, '&quot;');
   newStr = newStr.replace(/'/g, '&apos;');
  return newStr;
}
console.log(convertHTML("abc"));
***************************************************************************************************************************************************************************************************************************************************
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase = str =>{
  let newStr = str.split("");
  let holder = [];
  for (let i = 0; i<newStr.length; i++){
    if(newStr[i].charCodeAt(0)>= 65 && newStr[i].charCodeAt(0) <=90 && i !== 0 && newStr[i - 1] !== " ")//checks for a capital letter not at the start, and without a space in front of it
      holder.push(" " + newStr[i]);
    else {
      holder.push(newStr[i]);
    }
  }
  return holder.join("").replace(/\s/g, "-").replace(/\_/g, "").toLowerCase(); 
}
console.log(spinalCase("AllThe-small Things"));
***************************************************************************************************************************************************************************************************************************************************
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

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
****************************************************************************************************************************************************************************************************************************************************
Sum All Primes
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

isPrime = num => {//THIS FUNCTION IS NOT MY CODE it's from stack overflow https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {//this loop divides the number by every lesser integer greater than 1 to see if it produces a remainder or not 
        if(num%i === 0)//if it produces no remainder then it is NOT a prime
            return false;
    }
    return true;
}
sumPrimes = max =>{
  let primeArr = [];
  for (let i = 0; i<=max; i++){
      if(isPrime(i)){
        primeArr.push(i);
      }
  }
  let sum = primeArr.reduce((total, currentValue) => total + currentValue);
  return sum;
}
console.log(sumPrimes(977));//73156
****************************************************************************************************************************************************************************************************************************************************
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
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

---------------------------------------------------------------------------------------------------------2nd solution-------------------------------------------------------------------------------------------------------------------------------
white board steps to solving
//least common multiple
//first sort the array, then create an array that contains all of the values in the range from min to max
//create a boolean variable that determines if a quotient has a remainder or not
//declare the lcm variable
//use the boolean variable in a while loop and increase the lcm variable by 1 each loop iteration
//create a for loop to iterate the range array using the min and max numbers as the iterator value, if range is 4, 9 then use var i = 4, i is < 9
//if the lcm variable % the array[i] value is not 0, then break the loop so it can move on to another number
//the final else statement should check that the iterator has reached the last index, if so change the boolean variable to break the while loop
//lastly return the lcm variable
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
****************************************************************************************************************************************************************************************************************************************************
Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

findElements = (arr, func) =>{
  return arr.filter(func)[0];
}
console.log(findElements([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
****************************************************************************************************************************************************************************************************************************************************
Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.

dropElements = (arr, func) =>{ 
  let newArr;  
  for (let i =0; i< arr.length; i++){   
      if(func(arr[i])){//checks if the function at each index returns true, if so the array is sliced off and the loop breaks;
        newArr = arr.slice(i)
        break;
      }
    else newArr = [];
  }  
  return newArr;
}
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
****************************************************************************************************************************************************************************************************************************************************
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

The first algorithm that I solved recursively
steamrollArr = arr =>{  
  let flatten = arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue),[]);
  let found = flatten.find(function(element) {
    return Array.isArray(element);
  });
  if (found){
    return steamrollArr(flatten);
  }  
  return flatten;
}
console.log(steamrollArr([1, {}, [3, [[4]]]]));
****************************************************************************************************************************************************************************************************************************************************
Binary Agents
Return an English translated sentence of the passed binary string.

binaryAgent = str =>{   
  let breakdown = str.split(" ");
  let letterArr = []; 
  for (let i = 0; i<breakdown.length; i++){
    letterArr.push(String.fromCharCode(parseInt(breakdown[i], 2)));  //parseInt (str, integer 2 is used to format the string as decimal maybe?, other numbers here produce different letters from charCode)
  }   
  return letterArr.join("");
}
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
****************************************************************************************************************************************************************************************************************************************************
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

truthCheck = (collection, pre) =>{
  let propCheck = collection.map(entity = entity =>{
     if(entity[pre])
      {
        return true;
      }
    else return false;
  })
  let test = propCheck.find(function(element) {
    return element === false;
  });
  if (test === true || test === undefined){
    return true;
  }
  else {
    return false;
  } 
}
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
****************************************************************************************************************************************************************************************************************************************************
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
NOTE: This function doesn't perform the same in codepen as in other consoles
this video helped me a lot https://www.youtube.com/watch?v=HggkXmfXUlk once I got stuck, but the main issue was the codepen console not behaving similar to other consoles

function addTogether(){
  var params = [];
  for (var i = 0; i<arguments.length; i++){
    params.push(arguments[i]);
  }
  var notNum = params.filter(function(idx) {
    return typeof idx !== "number";
  });    
 
  params = params.filter(function(idx) {
    return typeof idx == "number";
  });    
  
  if(notNum.length > 0){
    return undefined;
  }
  
   else if (params.length === 2){
     return params[0] + params[1];   
   }
  
  else {
    var firstParam = params[0];
    var recall = function(secondParam){
      return addTogether(firstParam, secondParam);
    };
    return recall;
  }   
}

addTogether(2,3);
****************************************************************************************************************************************************************************************************************************************************
Validate US Telephone Numbers
Return true if the passed string is a valid US phone number.
//https://www.freecodecamp.org/challenges/validate-us-telephone-numbers
//https://www.youtube.com/watch?v=YTocEnDsMNw&t=752s
//https://regexr.com/

telephoneCheck = str =>{ 
  let tester = /(^\d{3}[-]|^(1\s\(\d{3}\)\s)|^(1\(\d{3}\))|^(1\s\d{3}[-\s])|^(\(\d{3}\)))\d{3}[-\s]\d{4}|^\d{10}$/gm;//I broke this down so that the first section would match only strings that started with the characters that matched the truth values up until xxx-xxxx   then I just added the match for those last 7 digits which matched everything except the 1 string with 10 consecutive digits, so that is placed in the final or statement
  return tester.test(str);
}
console.log(telephoneCheck("2 757 622-7382"));

for a formatted number 
this was taken from this site https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html
var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

if (phoneRegex.test(subjectString)) {
    var formattedPhoneNumber =
        subjectString.replace(phoneRegex, "($1) $2-$3");
} else {
    // Invalid phone number
}   
***************************************************************************************************************************************************************************************************************************************************
Record Collection (JSON)
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
  //console.log(collection[5439].artist);
 Only change code below this line
If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
Your function must always return the entire collection object.
There are several rules for handling incomplete data:
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
If value is empty (""), delete the given prop property from the album.


function updateRecords(id, prop, value) {  
   if (value === ''){
     delete collection[id][prop]; 
   } 
   if (prop === 'tracks' && !collection[id].tracks && value !== ''){
     collection[id].tracks = [];
     collection[id].tracks.push(value);
   }
   else if (prop === 'tracks' && collection[id].tracks && value !== ''){
     collection[id].tracks.push(value);
   }
  else if (prop === 'artist' && value !== ''){
    collection[id][prop] = value;
  }
  
   return collection;
}    
console.log(updateRecords(2548, "tracks", ""));

***************************************************************************************************************************************************************************************************************************************************

/*Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym(args){
  var diff = undefined;
  for (var i = 0; i< arguments.length; i++){ 
     if (arguments[i + 1]){
     if (!diff){
        var a = arguments[i];//i
        var b = arguments[i+ 1];//i + 1
        var c = (a.filter(idx => b.indexOf(idx) == -1)).concat(b.filter(idx2 => a.indexOf(idx2) == -1));      
        diff = c;
     }
     else {
        var a = arguments[i];//i
        var b = arguments[i+ 1];//i + 1
        diff = (diff.filter(idx => b.indexOf(idx) == -1)).concat(b.filter(idx2 => diff.indexOf(idx2) == -1));
        for (var j = 0; j < diff.length; j++){
         if (diff.indexOf(diff[j]) !== j){
           diff.splice(j, 1);
         }
        }       
       }  
     }
  }
  return diff.sort(function(a,b){
    return a - b;
  }) ; 
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); 
***************************************************************************************************************************************************************************************************************************************************
Exact Change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.

function checkCashRegister(price, pay, cid) {
  var change = {
    penny:{
      total : Math.round(cid[0][1] * 100)
    },
    nickel: {
      total: Math.round((cid[1][1] * 100) /5)
    },
    dime: {
      total: Math.round((cid[2][1] * 100) /10)
    },
    quarter: {
      total: Math.round((cid[3][1] * 100) /25)
    },
    one:{
      total: Math.round(cid[4][1])
    },
    five:{
      total:Math.round(cid[5][1] /5)
    },
    ten:{
      total:Math.round(cid[6][1] /10)
    },
    twenty:{
      total:Math.round(cid[7][1] /20)
    },
    hundred:{
      total:Math.round(cid[8][1] /100)
    }
  }//ends change object   
  var amount = pay - price;
  var cash = [];
  var sum = Math.round((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]) * 100) / 100;
  //console.log(sum);
  amount = Math.round(amount * 100) / 100;//removes floats where applicable like 20 - 19.1
  if (amount > sum){
    return "Insufficient Funds";
  }
  else if (amount === sum){
    return "Closed";
  }
  else {
    var count;
    //console.log("Amount before loop " + amount);
    while (amount > 0){
      if (amount >= 100){
            count = Math.floor(amount / 100);
          if (change.total.hundred >= count){
            cash.push(["ONE HUNDRED",count * 100]);
            amount = Math.round((amount - (count * 100)) * 100) /100; 
          }
          else if (change.hundred.total) {
            cash.push(["ONE HUNDRED",change.hundred.total])
            amount = Math.round((amount - cid[8][1]) * 100)/100;
            change.hundred.total = 0;
          }
     }//////////    
      else if (amount >= 20 && change.twenty.total){
        count = Math.floor(amount / 20);       
          if (change.twenty.total >= count){            
             cash.push(["TWENTY",count * 20]);
             amount = Math.round((amount - (count * 20)) * 100) /100; 
          }
           else {
             cash.push(["TWENTY", cid[7][1]]);
             amount = Math.round((amount - cid[7][1]) * 100)/100;          
             change.twenty.total = 0;
           }
        }//////////    
      else if (amount >= 10 && change.ten.total){
          count = Math.floor(amount / 10);
          if (change.ten.total >= count){
            cash.push(["TEN",count * 10]);
            amount = Math.round((amount - (count * 10)) * 100) /100; 
        }
        else {
          cash.push(["TEN", cid[6][1]])
          amount = Math.round((amount - cid[6][1]) * 100) /100;
          change.ten.total = 0;
        }          
      }////////////
      else if (amount >= 5 && change.five.total){
        count = Math.floor(amount / 5);
        if (change.five.total >= count){
             cash.push(["FIVE",count * 5]);
             amount = Math.round((amount - (count * 5)) * 100) /100; 
          }
        else {
          cash.push(["FIVE", cid[5][1]])
          amount = Math.round((amount - cid[5][1]) * 100) /100;
          change.five.total = 0;
        }
      }/////////////
      else if (amount >= 1 && change.one.total){
          count = Math.floor(amount / 1);
        if (change.one.total >= count){
          cash.push(["ONE",count]);
          amount = Math.round((amount - (count * 1)) * 100) /100;
        }
        else {
          cash.push(["ONE", cid[4][1]])
          amount = Math.round((amount - cid[4][1]) * 100) /100;
          change.one.total = 0;
        }           
      }////////////////////
      else if (amount >= .25 && change.quarter.total){      
          count = Math.floor(amount / .25);
        if (change.quarter.total >= count){
          cash.push(["QUARTER",count * .25]);
          amount = Math.round((amount - (count * .25)) * 100) /100; 
        }
        else {
          cash.push(["QUARTER", cid[3][1]]);
          amount = Math.round((amount - cid[3][1]) * 100) /100;
          change.quarter.total = 0;
        }
      }/////////////////////
      else if (amount >= .1 && change.dime.total){
          count = Math.floor(amount / .10);
        if (change.dime.total >= count){
          cash.push(["DIME",count * .1]);
          amount = Math.round((amount - (count * .10)) * 100) /100; 
        }
        else {
          cash.push(["DIME", cid[2][1]]);
          amount = Math.round((amount - cid[2][1]) * 100) / 100;
          change.dime.total = 0;
        }
      }////////////////////
      else if (amount >= .05 && change.nickel.total){
          count = Math.floor(amount / .05);
        if (change.nickel.total >= count){
          cash.push(["NICKEL",count * .05]);
          amount = Math.round((amount - (count * .05)) * 100) /100; 
        }
        else {
          cash.push(["NICKEL", cid[1][1]]);
          amount = Math.round((amount - cid[1][1]) * 100) /100;
          change.nickel.total = 0;
        }
      }/////////////////////
      else if (amount >= .01 && change.penny.total){
          count = Math.floor(amount / .01);
        if (change.penny.total >= count){
          cash.push(["PENNY",count * .01]);
          amount = Math.round((amount - (count * .01)) * 100) /100; 
        }
        else {
          cash.push(["PENNY", cid[0][1]]);
          amount = Math.round((amount - cid[0][1]) * 100) /100;
          change.penny.total = 0;
        }
      }  
      else {
         return "Insufficient Funds";
      }
    }//end while loop  
  }
  return cash;
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
***************************************************************************************************************************************************************************************************************************************************
Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {//indexOf doesn't work in a 2d array
  var hold1 = arr1;
  var hold2 = arr2;
  if (arr1.length > 1 && arr2.length >1){
  var indexer1 = [];
  var indexer2 = [];
 
  for (var i = 0; i< arr1.length; i++){//creates array of only the strings from first array
    indexer1.push(arr1[i][1]);
  }
  for (var j = 0; j<arr2.length;j++){//creates array of only the strings from 2nd array
    indexer2.push(arr2[j][1]);
}
  for (var idx = 0; idx<indexer1.length; idx++){
    if (indexer1.indexOf(indexer2[idx]) > -1){
      var match = indexer1.indexOf(indexer2[idx]);// first matches 2, then 0           
      hold1[idx][0] = hold1[idx][0] + hold2[match][0]; //adds the current index inventory number to the matched indexes inventory number
    }
    else {
      hold1.push(hold2[idx]);//if no match is found it adds the updated array to the curr inv array
    }
  }
  var indexer3 = [];
  var hold3 = [];
  for (var k = 0; k< hold1.length; k++){
    indexer3.push(hold1[k][1]);//creates an array of strings of the new correct inventory
  }
  indexer3.sort();//sorts the correct array alphabetically
  for (var d = 0; d<indexer3.length; d++){
    hold3.push([indexer3[d]]);
  }
  //console.log(hold3);
  //console.log(hold1);
  //console.log(indexer3);
  for (var l = 0; l < indexer3.length;l++){
    var found = indexer3.indexOf(hold1[l][1]);
    hold3[l].unshift(hold1[found][0]);
  }  
   return hold3;
  }//ends the non empty array section
  else {
    var stringer =[];
    var stringerAdd = [];
    if (arr1.length === 0 && arr2.length > 0){
      
      for (var x = 0; x<arr2.length; x++){
        stringer.push(arr2[x][1]);
      }
      stringer.sort();
      //console.log(stringer);
      for (var b = 0; b<stringer.length; b++){
        stringerAdd.push([stringer[b]]);
      }
     
      console.log(hold2);
      console.log(stringer);
      for (var c = 0; c<stringer.length; c++){
         var found = stringer.indexOf(hold2[c][1]);
         console.log(found);
       // console.log(hold2[found][0]);
        stringerAdd[found].unshift(hold2[c][0]);
        //console.log(stringerAdd);
      }
     return stringerAdd;
    }
    else if(arr2.length === 0 && arr1.length > 0){
      
      for (var y = 0; y<arr1.length; y++){
        stringer.push(arr1[y][1]);
      }
      stringer.sort();
    }
    for (var z = 0; z<stringer.length; z++){
      stringerAdd.push([stringer[z]]);
    }
   for (var a = 0; a<stringer.length; a++){
    var found = stringer.indexOf(hold1[a][1]);
    stringerAdd[a].unshift(hold1[found][0]);
   }
    return stringerAdd;
  }
  
}

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
***************************************************************************************************************************************************************************************************************************************************
No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

A lot of this code is a copy of heap's algorithm http://dsernst.com/2014/12/14/heaps-permutation-algorithm-in-javascript/    
which finds all of the possible permutations of a string

function permAlone(str){
 function repeatTest(arr){   
  var x = true;
  for (var i =0; i<arr.length; i++){
    if (i !== arr.length - 1 && (arr[i].charCodeAt(0) === arr[i + 1].charCodeAt(0))){//Need to account for the last index of hte array
     x = false;
     break;
    }
    else {
      x = true;
    }
  }
  return x;
}

var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};
  
var count = 0;
var heapsPermute = function (array, output, n) {
 
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    if (repeatTest(array)){//this is one of the few sections of my own custom code, most of this is heap's algorithm
      count ++;
    }
  
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};

var print = function(input){  
}
  var splitter = str.split('');
  heapsPermute(splitter,print);
  return count;
}

console.log(permAlone('aaabb'));
***************************************************************************************************************************************************************************************************************************************************
Make a Person
Fill in the object constructor with the following methods below:
getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
var Person = function(firstAndLast) {
  var arr = firstAndLast.split(" ");
  // Complete the method below and implement the others similarly
  this.setFirstName = function(first){
    this.FirstName = first;    
  },
  this.setLastName = function(last){
     this.LastName = last;
  },
  this.setFullName = function(firstAndLast){
    var splitter = firstAndLast.split(" "); 
    this.FirstName = splitter[0];
    console.log(this.FirstName);
    this.LastName = splitter[1];
  }, 
  this.getFirstName = function(){
     if(this.FirstName){
       return this.FirstName
     }
    
    else {
      return arr[0]
    }
  },
  this.getLastName = function(){
    if(this.LastName){
      return this.LastName
    }
    else{
      return arr[1]
    }
  },
   this.getFullName = function() {
      if (this.FirstName && this.LastName){
        return this.FirstName + " " + this.LastName;
      }
    else if (this.FirstName && !this.LastName){
       return this.FirstName + " " + arr[1];
    }
    else if (this.LastName && !this.FirstName){
      return arr[0] + " " + this.LastName
    }
    else{
      return firstAndLast;
    }   
  }
}

var bob = new Person('Bob Ross');
bob.setFullName("Test please");
console.log(bob.getFullName()); 
***************************************************************************************************************************************************************************************************************************************************
Orbital Period
Given the GM and earth's radius calculate the orbital period of the inputted array(s) and return an array with the orbital period
function orbital(alt){
  var earthRadius = 6367.4447;
  var a = Math.pow(alt + earthRadius,3);
  var u = 398600.4418; 
  return Math.round((Math.PI * 2) * Math.sqrt(a/u))
}
//console.log(orbital(35873.5553));

function orbitalPeriod(arr){
  var newArr = [];
  for (var i = 0; i<arr.length; i++){
    var test = orbital(arr[i].avgAlt);
    var newObj = {};
    newObj.name = arr[i].name;
    newObj.orbitalPeriod = test;
    newArr.push(newObj);
  }
 
  return newArr;
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
***************************************************************************************************************************************************************************************************************************************************
Pairwise
https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.
7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise

//my whiteboard
1st: Go through the array and find out which numbers add up to the arg
2nd: Once a number is used be sure to not include it in further calculations, not sure how to accomplish this while still being sure every possible pair is accounted for, might have to do this step AFTER to be 100% accurate
3rd: Be sure that all duplicate elements use the lower indice first
4th: Pair all of the elements with their corresponding index value
6th: Return the sum the index values of all of the pairs

function pairwise(arr, arg) {
  var idxArr = [];
  var valArr = [];
  for (var i = 0; i<arr.length;i++){
    for (var j = 0; j<arr.length;j++){//iterate through the array adding each value to on another
      if (arr[i] + arr[j] === arg && idxArr.indexOf(i) < 0 && idxArr.indexOf(j) < 0 && i !== j){//push the pairs into the idxArr if they haven't been included yet
        idxArr.push(i)
        idxArr.push(j);
        valArr.push(arr[i]);
        valArr.push(arr[j]);
      }
    }
  }
  if (idxArr.length > 0){//if the idxArr has any pairs at all add them up and return this value
      return idxArr.reduce(function(acc, val){
    return acc + val;
  });     
  } else {//if idxArr is empty returns 0
       return 0;
    }   
}

console.log(pairwise([1, 3, 2, 4], 4));
***************************************************************************************************************************************************************************************************************************************************
Bubble Sort
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
***************************************************************************************************************************************************************************************************************************************************
Selection Sort

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
***************************************************************************************************************************************************************************************************************************************************
Insertion Sort
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
https://learn.freecodecamp.org/coding-interview-prep/algorithms/implement-insertion-sort

 function insertionSort(array) {
  for (var i = 0; i<array.length; i++){
    var spliced = array.splice(0, i + 1);
    if (spliced[i] < spliced[i - 1]){//if the newest number in the array is less than the preceding number it goes through a for loop that starts from start of spliced to determine the new value's proper place
      for (var j = 0; j<spliced.length; j++){
        if (spliced[i] < spliced[j]){
          var temp = spliced[j];
          spliced[j] = spliced[i];
          spliced[i] = temp;         
        }
      }
    }
    array = spliced.concat(array);    
  }  
  return array;
}
console.log(insertionSort([32, 1, 5643, 4, 2, 63, 123, 43, 2, 55, 1, 234, 92, 123, 2, 163, 123, 43, 2, 55, 1, 234, 92, -5, 25, -16]));//[-16, -5, 1, 1, 1, 2, 2, 2, 2, 4, 25, 32, 43, 43, 55, 55, 63, 92, 92, 123, 123, 123, 163, 234, 234, 5643]
***************************************************************************************************************************************************************************************************************************************************
/*Quicksort 
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.
https://www.youtube.com/watch?v=COk73cpQbFQ&index=6&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U  great explanation of quicksort
https://www.youtube.com/watch?v=0KBvaKc__rc&t=26s   this video is near identical to how I did the algorithm using the first video's help, this video led me to the spread operator on the return instead of another variable

function quickSort(arr) {
  if (arr.length <= 1){
    return arr;
  }
  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];
  for (var i = 0;i<arr.length -1;i++){
    if(arr[i]<= pivot){
      left.push(arr[i]);
    }
    else{
      right.push(arr[i]);
    }
  } 
  return [...quickSort(left), pivot, ...quickSort(right)];//adding the spread operator removes the array brackets from appearing over and over, they could be removed in other ways as well such as a flatten nested array reduce method
}
console.log(quickSort([32, 1, 56, 43, 4, 23, 10, 63, 23]));//43, 2, 55, 1, 234, 92, 123, 2, 163, 123, 43, 2, 55, 1, 234, 92, -5, 25, -16]));
***************************************************************************************************************************************************************************************************************************************************
Merge Sort
Another intermediate sorting algorithm that is very common is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:
1) Recursively split the input array in half until a sub-array with only one element is produced.
2) Merge each sorted sub-array together to produce the final sorted array.
Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

https://www.youtube.com/watch?v=4VqmGXwpLqc
https://www.youtube.com/watch?v=JSceec-wEyw
https://www.youtube.com/watch?v=o1V9J3QR1ZQ

function mergeSort(arr) {
  if (arr.length === 1){//if the array is length 1 stop the recursion
    return arr;
  }
  var mid = Math.round(arr.length/2);//create a variable to hold the midpoint of each array, if odd the left half will be longer length
  var a = arr.splice(0,mid);//create array from 0 index to midpoint
  var b = arr;  //create array from midpoint to end
  a = mergeSort(a);  //invoke the mergeSort function on left array
  b = mergeSort(b);//invoke mergeSort on right array
  return merge(a,b); //recursively go through each array until they are broken into single element arrays
}
  function merge(left,right){
  var c = [];//empty array to hold the results 
    while(left.length >= 1 && right.length >= 1){//if both halves have elements in them
    if(left[0] > right[0]){//compares each half arrays 0 indexes, if the right array's 0 index is lower the value is pushed to end of c array and removed from the right array
      c.push(right[0]);
      right.shift();
    }
    if(right[0] >= left[0]){//compares each half arrays 0 index, if the left array's 0 index is less than OR EQUAL then it is pushed to the c array and removed from left array
      c.push(left[0]);
      left.shift();
    }
  }//after this while loop finished one of the arrays will be empty, check which array still has elements with the following 2 while conditions
  while(left.length >= 1){
    c.push(left[0]);
    left.shift();
  }
  while(right.length >= 1){
    c.push(right[0]);
    right.shift();
  } 
  return c;
}
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
***************************************************************************************************************************************************************************************************************************************************
*/
