/*Piglatin
For this algorithm I created a function to translate any lower case word into piglatin, then I used that functon to create another function that can change an entire sentence into piglatin
note it has to be lower case and words without vowels like "why" don't translate properly */

sentences = longStr =>{
  let newPhrase = [];  
 longStr.split(" ").map(word = word =>{
    newPhrase.push(pigLatin(word)); 
  })
  return newPhrase.join(' ');
}

pigLatin = str =>{
  let indexing = [];
  let remove;
  let sliced;
  let piggy = '';
  let arr = str.split('').map(letter = letter =>{
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
      {
        indexing.push(str.indexOf(letter));        
      }
    remove = indexing[0];
  })
  if (remove === 0)
    {
      piggy = str + "way";
    }
  else {    
    sliced = str.substring(0, remove);
    piggy= str.substring(remove) + sliced + "ay";
  } 
  return piggy;
}

console.log(sentences("i don't know, you tell me why gladly created algorithms phased out piglatin, or maybe it was the alcohol"));