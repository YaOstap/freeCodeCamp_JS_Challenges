/** DNA Pairing
  * Base pairs are a pair of AT and CG. Match the missing element 
  * to the provided character.
  * Return the provided character as the first element in each array.
  *
  * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
  *
  * The character and its pair are paired up in an array, and all the arrays 
  * are grouped into one encapsulating array.
  */

  function pairElement(str) {
  	  /** I use split method to cut the string and put all
  	    * elements separately in 'dna' array.
  	    */
	  var dna = str.split('');
	  // Create variable to return result.
	  var result = [];
	  /** Use forEach method to go through an array an to use function 
	    * with 'switchconstruction" once for each array element. 
	    * Switch constructor check all characters in the array and push in 
	    * result array correctly DNA model from all characters in the form of 
	    * an internal array with two elements.
	    */
	  dna.forEach(function(elem) {
	    switch (elem) {
	      case 'A': 
	        result.push(['A','T']);
	        break;
	      case 'T': 
	        result.push(['T','A']);
	        break;
	      case 'C': 
	        result.push(['C','G']);
	        break;
	      case 'G': 
	        result.push(['G','C']);
	        break;
	    }
	  });
	  return result;
}

pairElement("ATCGA");
//return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG");
//return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA");
//return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
