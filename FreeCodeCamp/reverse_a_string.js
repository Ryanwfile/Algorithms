Reverse a String

function reverseString(str){
  const newStr = str.split('').reverse().join('');
  return newStr;
}

console.log(reverseString("batcountry"));