//Missing Letters
//This algorithm takes a sequential string and returns the missing letter, if no letter is missing it returns undefined

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