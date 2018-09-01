//DNA Pairing
//each letter in the string is the first part of a pair, the pairs are GC and AT, return an array with the pairs in tack so GCGA would be [G,C], [C,G],[G,C],[A,T]

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