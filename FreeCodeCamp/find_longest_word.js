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