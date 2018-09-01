//my way
function checkPalindrome(str){
  var noCaps = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
  var reverse = str.split('').reverse().join('').toLowerCase().replace(/[^a-z0-9]+/g, "");  
  return noCaps === reverse;
};

console.log(checkPalindrome("1 eye for of 1 eye."));

//below is a more efficient way as the above method looks at an entire string before comparing, the method below compares 2 characters

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