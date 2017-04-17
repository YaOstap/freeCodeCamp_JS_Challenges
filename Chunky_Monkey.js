/** Chunky Monkey.
  *
  * Write a function that splits an array (first argument) into groups the 
  * length of size (second argument) and returns them
  * as a two-dimensional array.
  *
  * My solution is use slice method to tempArr using and create an empty 
  * array called dimArr.
  * After that I use the "for loop" to put all needest elements to my dimArr.
  * 
  * When I put this elements with push and slice methods, I cut tempArr with 
  * slice method for next iteration in the "for loop".
  */


function chunkArrayInGroups(arr, size) {
  var tempArr = arr.slice();
  var dimArr = [];
  for (var i=0; i < tempArr.length; i+size) {
    dimArr.push(tempArr.slice(0, size));
    tempArr = tempArr.slice(size);   
  }
  return dimArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);