//Boo who
//Returns true if the argument passed is a primitive boolean, meaning if it's false or true, all other values return false

booWho = bool =>{
  if (bool === true || bool === false){
    return true;
  }
  else {
    return false;
  }
}
console.log(booWho("false"));