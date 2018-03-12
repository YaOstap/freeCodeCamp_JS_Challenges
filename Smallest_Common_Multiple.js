/** Smallest Common Multiple
  *
  * Find the smallest common multiple of the provided parameters that can be
  * evenly divided by both, as well as by all sequential numbers in the range between
  * these parameters.
  * 
  * The range will be an array of two numbers that will not necessarily
  * be in numerical order.
  */


function smallestCommons(arr) {
  
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;
    
  function validator(m, min, max) {
    for (var i = min; i < max; i++) {
      if (m % i !== 0) {
        return false;
      }
    }
    
    return true;
  }
    
  while (!validator(multiple, min, max)) {
    multiple += max;
  }
  
  return multiple;
}

smallestCommons([1, 5]); // should return a number.
smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([23, 18]); // should return 6056820.
