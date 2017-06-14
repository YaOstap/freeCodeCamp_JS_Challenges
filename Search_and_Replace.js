/** Search and Replace.
  * Perform a search and replace on the sentence using the arguments provided
  * and return the new sentence.
  *
  * First argument is the sentence to perform the search and replace on.
  *
  * Second argument is the word that you will be replacing (before).
  *
  * Third argument is what you will be replacing the second argument with (after).
  *
  * NOTE: Preserve the case of the original word when you are replacing it.
  * For example if you mean to replace the word "Book" with the word "dog",
  * it should be replaced as "Dog"
  */



function myReplace(str, before, after) {
  var newStr = str.split(' ');
  for (var i=0; i<newStr.length; i++) {
    while (newStr[i] == before) {
      /** If first letter of before is capitalized, 
        * change first letter of "after" to uppercase.
        * If another, switch to "else" statemant.
        */
      if (newStr[i].charAt(0) == newStr[i].charAt(0).toUpperCase()) {
        newStr[i] = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
        newStr[i] = after.charAt(0).toLowerCase() + after.substr(1);
      }
    }
  }
  return newStr.join(" ");
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// "A quick brown fox leaped over the lazy dog"

myReplace("Let us go to the store", "store", "mall");
// return "Let us go to the mall".

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// return "He is Sitting on the couch".

myReplace("This has a spellngi error", "spellngi", "spelling");
// return "This has a spelling error".

myReplace("His name is Tom", "Tom", "john");
// return "His name is John".

myReplace("Let us get back to more Coding", "Coding", "algorithms");
// return "Let us get back to more Algorithms".