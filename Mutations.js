/**
  * Mutations
  *
  * Return true if the string in the first element of the array contains all 
  * of the letters of the string in the second element of the array.
  *
  * For example, ["hello", "Hello"], should return true because all of the 
  * letters in the second string are present in the first, ignoring case.
  *
  * The arguments ["hello", "hey"] should return false because the string 
  * "hello" does not contain a "y".
  * 
  * Lastly, ["Alien", "line"], should return true because all of the letters
  * in "line" are present in "Alien".
  */


function mutation(arr) {
  var origin = arr[0].toLowerCase();
  var search = arr[1].toLowerCase();
  /** My solution is using in the "for loop" indexOf() method to verify  if the
    * string in the first element of the array contains all of the letters of 
    * the string in the second element of the array.
    */
  for (var i=0; i < search.length; i++) {
    if (origin.indexOf(search[i]) < 0) 
  return false;
  }
  return true;
}

mutation(["hello", "hey"]);