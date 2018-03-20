/** Finders Keepers
  * 
  * Create a function that looks through an array
  * (first argument) and returns the first element in the array that 
  * passes a truth test (second argument).
  */

function findElement(arr, func) {
  // We use the filter function to go through an array and compare each
  // element in an array with second argument (our additional function);
  // For saving result we must create new variable;
  var newArray = arr.filter(func);
  // After filter finish work, we return the first result from new Array;
  return newArray[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
// should return 8;

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
// should return undefined;