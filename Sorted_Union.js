/** Sorted Union
  *
  * Write a function that takes two or more arrays and returns a new array of 
  * unique values in the order of the original provided arrays.
  *
  * In other words, all values present from all arrays should be included in 
  * their original order, but with no duplicates in the final array.
  *
  * The unique numbers should be sorted by their original order, but the final 
  * array should not be sorted in numerical order.
  */

function uniteUnique(arr) {
	// Convert the arguments object into an array and create array to store result.
  var temp = Array.prototype.slice.call(arguments), final = [];
  final = temp.reduce(function(arg1,arg2){
  // Applying filter method to remove the duplicate elements in the array
    return arg1.concat(arg2.filter(function(value){
    	// Use indexOf to check if the element present in the final array.
      return arg1.indexOf(value) === -1;
    }));
  });

   return final;                    
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4].

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// should return [1, 3, 2, [5], [4]].

uniteUnique([1, 2, 3], [5, 2, 1]);
// should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// should return [1, 2, 3, 5, 4, 6, 7, 8].