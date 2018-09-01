//Bouncer
//Remove all false values from an array

bouncer = (arr) => {
  const results = arr.filter(index =>Boolean(index) === true);
  return results;
}

console.log(bouncer([0,null, 2, 3, false, NaN, 16, "PA", undefined, "Bacon and eggs","", -252, -0]));