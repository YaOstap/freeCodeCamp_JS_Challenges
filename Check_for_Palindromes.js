/** Check for Palindromes. 
  *
  * Return true if the given string is a palindrome. Otherwise, return false.
  * 
  * A palindrome is a word or sentence that's spelled the same way 
  * both forward and backward, ignoring punctuation, case, and spacing.
  *
  * Note
  * You'll need to remove all non-alphanumeric characters (punctuation, 
  * spaces and symbols) and turn everything lower case in order to  
  * check for palindromes.
  *
  * We'll pass strings with varying formats, such as "racecar", 
  * "RaceCar", and "race CAR" among others.
  *
  * We'll also pass strings with special symbols, such as "2A3*3a2", 
  * "2A3 3a2", and "2_A3*3#A2".
  */

  
function palindrome(str) {
  /** I use Regular Expressions: 
    * W - remove all non-alphanumeric characters;
    * _ -  to match symbols like: _:/\()–;
    */
  var regExp = /[\W_]/g;
  /** After that we convert string to lowercase and return a new string with 
    * some or all matches of a pattern replaced 
    * by a replacement (Pattern included in RegEx).
    */
  var lowStr = str.toLowerCase().replace(regExp, '');
  /** In this string of code I have split a "string object" into an array of
    * strings by separating the string into sub strings. 
    * After that I used reverse() method to reverse an array in place. 
    * The first array element becomes the last and the last becomes the first.
    * This join('') method joins all elements of an array into a string.
    */
  var reverseStr = lowStr.split('').reverse().join(''); 
  return reverseStr === lowStr;
}



palindrome("eye");
// should return true.
palindrome("race car");
// should return true.
palindrome("not a palindrome");
// should return false.
palindrome("A man, a plan, a canal. Panama");
// should return true.
palindrome("never odd or even");
// should return true.
palindrome("nope");
// should return false.
palindrome("almostomla");
// should return false.
palindrome("My age is 0, 0 si ega ym.");
// should return true.
palindrome("1 eye for of 1 eye.");
// should return false.
palindrome("0_0 (: /-\ :) 0-0");
// should return true.
palindrome("five|\_/|four");
// should return false.