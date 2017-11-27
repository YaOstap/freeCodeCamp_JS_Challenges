/* Check if a value is classified as a boolean primitive. Return true or false.
 * 
 * Boolean primitives are true and false. 
 */

function booWho(bool) {
  /*
   * I use the "typeof" operator and strict equality comparison to check if the variable is a boolean. 
   * If it is boolean - it will return "true"; if it is other type - it will return "false".
   */
  return typeof bool === 'boolean';
}

booWho(null); //should return false.
booWho(true); //should return true.
booWho(false); //should return true.
booWho([1, 2, 3]); //should return false.
booWho([].slice); //should return false.
booWho({ "a": 1 }); //should return false.
booWho(1); //should return false.
booWho(NaN); //should return false.
booWho("a"); //should return false.
booWho("true"); //should return false.
booWho("false"); //should return false.