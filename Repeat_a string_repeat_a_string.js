/** Repeat a string repeat a string 
  * Repeat a given string (first argument) num times (second argument).
  * Return an empty string if num is not a positive number.
  */
  

/** My solution is using "for loop" and new variable "newStr" 
  * ("newStr" must be out of the loop).
  * I joined "str" with + operand in newStr variable in each iteration 
  * of "for loop".
  */  
function repeatStringNumTimes(str, num) {
  var newStr = "";
  for (var i = num; i > 0; i--) {
   newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
