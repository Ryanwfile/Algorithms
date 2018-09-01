//Validate US Telephone Numbers
//Return true if the passed string is a valid US phone number.
//https://www.freecodecamp.org/challenges/validate-us-telephone-numbers
//https://www.youtube.com/watch?v=YTocEnDsMNw&t=752s
//https://regexr.com/

telephoneCheck = str =>{ 
  let tester = /(^\d{3}[-]|^(1\s\(\d{3}\)\s)|^(1\(\d{3}\))|^(1\s\d{3}[-\s])|^(\(\d{3}\)))\d{3}[-\s]\d{4}|^\d{10}$/gm;//I broke this down so that the first section would match only strings that started with the characters that matched the truth values up until xxx-xxxx   then I just added the match for those last 7 digits which matched everything except the 1 string with 10 consecutive digits, so that is placed in the final or statement
  return tester.test(str);
}
console.log(telephoneCheck("2 757 622-7382"));