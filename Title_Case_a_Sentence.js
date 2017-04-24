/** Title Case a Sentence
  * Return the provided string with the first letter of each word capitalized.
  * Make sure the rest of the word is in lower case.
  *
  * For the purpose of this exercise, you should also capitalize 
  * connecting words like "the" and "of".
  */

  
function titleCase(str) {
  // First I lowercase and split the string into an array of strings.
  var arr = str.toLowerCase().split(" ");
  /** Next I create the FOR loop and return strings with the first 
    * letter of each word capitalized.
    */
  for (var i=0; i<arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  // Next I join array into the string and return it.
  var newStr = arr.join(" ");
  return newStr;
}

titleCase("I'm a little tea pot");
