//Wherefore art thou
//for this algorithm an array of objects is given in the first argument and the algorithm should return an array of the objects that have all of the matching key/value pairs of the 2nd argument

whatIsInAName = (collection, source) => {  
  let matching = collection.filter(sourceMatch = sourceMatch =>{
    let tester;
    for (var i = 0; i< Object.keys(source).length;i++){
      tester = (sourceMatch[Object.keys(source)[i]] === source[Object.keys(source)[i]]);//tests whether or not each key/value pair in the 2nd argument is present in each object of the 1st argument     
    }
    return tester;//returns true only if the key/value pair of the 2nd argument is present in the object of the first argument, prefix tester with a ! to get the non matching key/value pairs
  })  
  return matching;
}
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));