/*Caesar's Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string. */

rot13 = str =>{
  let results = [];
  let cut = str.split("");
  let cipher = cut.map(letter = letter=>{
    return letter.charCodeAt(0);
  })
  
  for (let i =0; i<cipher.length;i++){
    if (cipher[i] < 65 || (cipher >=91 && cipher[i] <= 96)|| cipher[i] > 122){
      cipher[i] = cipher[i]; 
    }
    else if(cipher[i] + 13 > 90 || cipher[i] + 13 > 122){
      cipher[i] -= 13;      
    }
    else {
      cipher[i] +=13;      
    } 
  }
  for (var j = 0; j<cipher.length; j++){
      results.push(String.fromCharCode(cipher[j]));
  }
  return results.join("");
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));