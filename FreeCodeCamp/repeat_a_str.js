let repeatStringNumTimes = (str, num) => {
  finalString = '';
  for (var i = 0; i< num;i++){
    finalString += str;
  }
  return finalString;
}

console.log(repeatStringNumTimes("abc", -2));