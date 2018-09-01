//Convert HTML entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

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