//Binary Agents
//Return an English translated sentence of the passed binary string.

binaryAgent = str =>{   
  let breakdown = str.split(" ");
  let letterArr = []; 
  for (let i = 0; i<breakdown.length; i++){
    letterArr.push(String.fromCharCode(parseInt(breakdown[i], 2)));  //parseInt (str, integer 2 is used to format the string as decimal maybe?, other numbers here produce different letters from charCode)
  }   
  return letterArr.join("");
}
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));