/** Seek and Destroy
  *
  * You will be provided with an initial array (the first argument 
  * in the destroyer function), followed by one or more arguments. 
  * Remove all elements from the initial array that are of the same 
  * value as these arguments.
  */

  
function destroyer(arr) {
  // Declare a variable "args" and set it equal to a new Array object. 
  // With slice method we return copy of an arguments passed into the function. 
  var args = Array.prototype.slice.call(arguments);
  // var args = Array.from(arguments) - does the same job as above;
  
  // Splice method separate the arguments used for filtering.
  args.splice(0, 1);
  // With filter method we return true to keep the value in the original array or false to remove it.
  return arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].