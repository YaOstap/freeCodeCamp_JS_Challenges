/** Steamroller.
  * 
  * Flatten a nested array. You must account for varying levels of nesting.
  */

function steamrollArray(arr) {
  // Create an array to save the result.
  var result = [];
  // Call the function for all elements in the array;
  arr.forEach(steamroller);
  
  // Function that adds an element if it isn't an array. 
  function steamroller (arg) {
    if (!Array.isArray(arg)) {
      result.push(arg);
    } else {
      // If it is an array, then loops through it and uses recursion on that array.
      for (var elem in arg) {
        steamroller(arg[elem]);
      }
    }
  }
  return result;
}


steamrollArray([[["a"]], [["b"]]]);
// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]);
// should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);
// should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);
// should return [1, {}, 3, 4].