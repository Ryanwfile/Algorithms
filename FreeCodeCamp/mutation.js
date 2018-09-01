//Mutation
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

mutation = (arr) =>{
  let test; 
  for (let i = 0; i<arr[1].length; i++){
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) >=0)
     {
       test = true; 
     } 
    else
      {       
        test = false;
        break;
      }    
  }
   return test;
}

console.log(mutation(["Alien", "line"]));