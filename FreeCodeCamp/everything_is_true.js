//Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

truthCheck = (collection, pre) =>{
  let propCheck = collection.map(entity = entity =>{
     if(entity[pre])
      {
        return true;
      }
    else return false;
  })
  let test = propCheck.find(function(element) {
    return element === false;
  });
  if (test === true || test === undefined){
    return true;
  }
  else {
    return false;
  } 
}
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));