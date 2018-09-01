/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"*/

myReplace = (str,before,after) =>{   
  let replacer;
  if (before.charAt(0).toLowerCase() == before.charAt(0)){
    replacer = str.replace(before, after);    
  }
  else {
    let firstCharAfter = after.charAt(0);
    firstCharAfter = firstCharAfter.toUpperCase(); 
    after = firstCharAfter + after.substr(1);
    replacer = str.replace(before, after);    
  }
  return replacer; 
}
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));