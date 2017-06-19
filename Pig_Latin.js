/** Pig Latin.
  *
  * Translate the provided string to pig latin.
  * Pig Latin takes the first consonant (or consonant cluster) of an English 
  * word, moves it to the end of the word and suffixes an "ay".
  *
  * If a word begins with a vowel you just add "way" to the end.
  *
  * Input strings are guaranteed to be English words in all lowercase.
  */


function translatePigLatin(str) {
  var pigLat = '';
  var regExp = /[aeiou]/gi;
  // I've check if the first character is a vowel with a regular expression.
  if (str[0].match(regExp)) {
    pigLat = str + 'way';

  } else {
    // Find all consonants before the first vowel latter.
    var vowelIndex = str.indexOf(str.match(regExp)[0]);
    // With substr method I've take the string from the first vowel to the last char of the "str". 
    // Then add the consonants that I've previously omitted and add the ending.
    pigLat = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  }
  return pigLat;
}

translatePigLatin("california");
// return "aliforniacay".
translatePigLatin("paragraphs");
// return "aragraphspay".
translatePigLatin("glove");
// return "oveglay".
translatePigLatin("algorithm");
// return "algorithmway".
translatePigLatin("eight");
// return "eightway".
