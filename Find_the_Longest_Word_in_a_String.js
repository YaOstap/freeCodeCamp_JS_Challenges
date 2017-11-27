/** Find the Longest Word in a String. 
  *
  * Return the length of the longest word in the provided sentence.
  *
  * Your response should be a number.
  */

function findLongestWord(str) {
  // Convert the "str" string it into an array of words.
  var arr = str.split(" ");
  // Declare a variable to keep track of the maximum length. 
  var longWord = 0;
  for (var i=0; i<arr.length; i++) {
	// Check for the longest word by comparing the current word to the previous one. 
    if (arr[i].length > longWord) {
		// Storing the new longest word lenght in declared variable;
        longWord = arr[i].length;
        }
  }
  // Return the number value of the  variable of the maximum length.
  return longWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //should return 6.
findLongestWord("The quick brown fox jumped over the lazy dog"); //should return 6.
findLongestWord("May the force be with you"); //should return 5.
findLongestWord("Google do a barrel roll"); //should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow"); //should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //should return 19.