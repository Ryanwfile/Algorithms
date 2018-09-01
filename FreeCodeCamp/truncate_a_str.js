//(first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

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