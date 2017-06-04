/** Sum All Numbers in a Range.
  *
  * We'll pass you an array of two numbers. Return the sum of those two
  * numbers and all numbers between them.
  * The lowest number will not always come first.
  */

/** My solution is use array.prototype.sort method to find to find min 
  * and max value in the array. First element of the array 
  * will be MIN VAL and the second element will be MAX VAL.
  */

function sumAll(arr) {
  var numbers = arr;
  numbers.sort(function(a, b) {
    return a - b;
  });
  var temp = 0;
  /** After that i use for loop to count SUM of those two numbers in an array
    * (with all numbers between MIN and MAX value.
    */
  for (var i=numbers[0]; i<=numbers[1]; i++) {
    temp += i;
  }
  return temp;
}

sumAll([4, 1]);
sumAll([1, 4]);
sumAll([7, 1]);
sumAll([5, 10]);
sumAll([10, 5]);