//Inventory Update
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {//indexOf doesn't work in a 2d array
  var hold1 = arr1;
  var hold2 = arr2;
  if (arr1.length > 1 && arr2.length >1){
  var indexer1 = [];
  var indexer2 = [];
 
  for (var i = 0; i< arr1.length; i++){//creates array of only the strings from first array
    indexer1.push(arr1[i][1]);
  }
  for (var j = 0; j<arr2.length;j++){//creates array of only the strings from 2nd array
    indexer2.push(arr2[j][1]);
}
  for (var idx = 0; idx<indexer1.length; idx++){
    if (indexer1.indexOf(indexer2[idx]) > -1){
      var match = indexer1.indexOf(indexer2[idx]);// first matches 2, then 0           
      hold1[idx][0] = hold1[idx][0] + hold2[match][0]; //adds the current index inventory number to the matched indexes inventory number
    }
    else {
      hold1.push(hold2[idx]);//if no match is found it adds the updated array to the curr inv array
    }
  }
  var indexer3 = [];
  var hold3 = [];
  for (var k = 0; k< hold1.length; k++){
    indexer3.push(hold1[k][1]);//creates an array of strings of the new correct inventory
  }
  indexer3.sort();//sorts the correct array alphabetically
  for (var d = 0; d<indexer3.length; d++){
    hold3.push([indexer3[d]]);
  }
  //console.log(hold3);
  //console.log(hold1);
  //console.log(indexer3);
  for (var l = 0; l < indexer3.length;l++){
    var found = indexer3.indexOf(hold1[l][1]);
    hold3[l].unshift(hold1[found][0]);
  }  
   return hold3;
  }//ends the non empty array section
  else {
    var stringer =[];
    var stringerAdd = [];
    if (arr1.length === 0 && arr2.length > 0){
      
      for (var x = 0; x<arr2.length; x++){
        stringer.push(arr2[x][1]);
      }
      stringer.sort();
      //console.log(stringer);
      for (var b = 0; b<stringer.length; b++){
        stringerAdd.push([stringer[b]]);
      }
     
      console.log(hold2);
      console.log(stringer);
      for (var c = 0; c<stringer.length; c++){
         var found = stringer.indexOf(hold2[c][1]);
         console.log(found);
       // console.log(hold2[found][0]);
        stringerAdd[found].unshift(hold2[c][0]);
        //console.log(stringerAdd);
      }
     return stringerAdd;
    }
    else if(arr2.length === 0 && arr1.length > 0){
      
      for (var y = 0; y<arr1.length; y++){
        stringer.push(arr1[y][1]);
      }
      stringer.sort();
    }
    for (var z = 0; z<stringer.length; z++){
      stringerAdd.push([stringer[z]]);
    }
   for (var a = 0; a<stringer.length; a++){
    var found = stringer.indexOf(hold1[a][1]);
    stringerAdd[a].unshift(hold1[found][0]);
   }
    return stringerAdd;
  }
  
}

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));