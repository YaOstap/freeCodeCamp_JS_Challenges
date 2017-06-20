/** DNA Pairing.
  * The DNA strand is missing the pairing element. 
  * Take each character, get its pair, and return the results as a 2d array.
  * 
  * Base pairs are a pair of AT and CG. Match the missing element 
  * to the provided character.
  *
  * Return the provided character as the first element in each array.
  * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
  *
  * The character and its pair are paired up in an array, and all the arrays 
  * are grouped into one encapsulating array.
  */

function pairElement(str) {
  var firstArr = str.split('');
  var answerArr = [];
  for (var i=0; i<firstArr.length; i++) {
    if (firstArr[i] == "A") {
      answerArr[i] = ["A","T"];
    } else if (firstArr[i] == "C") {
      answerArr[i] = ["C","G"];
    } else if (firstArr[i] == "G"){
      answerArr[i] = ["G","C"];
    } else {
      answerArr[i] = ["T","A"];
    }
  }
  return answerArr;
}
pairElement("ATCGA");
// return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG");
// return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA");
// return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].