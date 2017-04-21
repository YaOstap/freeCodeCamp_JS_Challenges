/** Slasher Flick 
  *
  * Return the remaining elements of an array after chopping off n elements 
  * from the head.
  * 
  * The head means the beginning of the array, or the zeroth index.
  *
  * My solution is using "if" statement to return empty array if "howMany" 
  * value will be more than "arr.length". 
  *
  * After that I use slice method to return the remaining elements of an array. 
  **/


function slasher(arr, howMany) {
  var newArr = [];
  if (howMany >= arr.length) {
    return newArr;
  } else {
    newArr = arr.slice(howMany);
  }
  
  return newArr;
}

slasher([1, 2, 3], 2);