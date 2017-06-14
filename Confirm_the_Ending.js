/** Confirm the Ending 
  * Check if a string (first argument, str) ends with the given 
  * target string (second argument, target).
  *
  * This challenge can be solved with the .endsWith() method, which was 
  * introduced in ES2015. But for the purpose of this challenge, we would like 
  * you to use one of the JavaScript substring methods instead.
  */

  
function confirmEnding(str, target) {
  // We use "substr()" method to return last characters of a string.
  var endStr = str.substr(str.length - target.length);
    /** We compare endStr with "target" to determine whether the 
      * ending of the string matches using "if" statement.
      */
  if (endStr == target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
// Should return true.

confirmEnding("Connor", "n");
// Should return false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
// Should return false.

confirmEnding("He has to give me a new name", "name");
// Should return true.