/** Missing letters.
  *
  * Find the missing letter in the passed letter range and return it.
  *
  * If all letters are present in the range, return undefined.
  */


function fearNotLetter(str) {
    for(var i = 0; i < str.length; i++) {
	// I create variable to save ASCII number of each characters of the string.
    var temp = str.charCodeAt(i);
	  /* In "for" loop I use "if" statement to compare is number of letter in 
	   * temp variable equal to number in the right side of the comparison.
	   *
	   * On the right side of the comparison I count the numbers of each next letter of the alphabet. 
	   * I start this counting from the number of the first letter, that given in the "str".
	   *
	   * If a character is missed, the missed character become found and the final string is returned.
       */
      if (temp !== str.charCodeAt(0) + i) {
      return String.fromCharCode(temp-1);
    }
  }
  // If all characters are present, the function return "undefined".
  return undefined;
}

fearNotLetter("abce");
// return "d".

fearNotLetter("abcdefghjklmno");
// return "i".

fearNotLetter("bcd");
// return undefined.

fearNotLetter("yz");
// return undefined.