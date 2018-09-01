//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase = str =>{
  let newStr = str.split("");
  let holder = [];
  for (let i = 0; i<newStr.length; i++){
    if(newStr[i].charCodeAt(0)>= 65 && newStr[i].charCodeAt(0) <=90 && i !== 0 && newStr[i - 1] !== " ")//checks for a capital letter not at the start, and without a space in front of it
      holder.push(" " + newStr[i]);
    else {
      holder.push(newStr[i]);
    }
  }
  return holder.join("").replace(/\s/g, "-").replace(/\_/g, "").toLowerCase(); 
}
console.log(spinalCase("AllThe-small Things"));