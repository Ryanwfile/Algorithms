//Orbital Period
//Given the GM and earth's radius calculate the orbital period of the inputted array(s) and return an array with the orbital period
function orbital(alt){
  var earthRadius = 6367.4447;
  var a = Math.pow(alt + earthRadius,3);
  var u = 398600.4418; 
  return Math.round((Math.PI * 2) * Math.sqrt(a/u))
}
//console.log(orbital(35873.5553));

function orbitalPeriod(arr){
  var newArr = [];
  for (var i = 0; i<arr.length; i++){
    var test = orbital(arr[i].avgAlt);
    var newObj = {};
    newObj.name = arr[i].name;
    newObj.orbitalPeriod = test;
    newArr.push(newObj);
  }
 
  return newArr;
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));