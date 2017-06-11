/** Roman Numeral Converter.
  * 
  * Convert the given number into a roman numeral.
  *
  * All roman numerals answers should be provided in upper-case.
  */


function convertToRoman(num) {
  /** I create two arrays, one with the Roman Numerals and one with the decimal
    * equivalent. I use this counting to make my code short.
    */
  var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var romanized = '';
  /** I loop through the indicies of the "decimal" array, 
    * and continue to loop until while the value at the current index "i" 
    * will fit into num.
    */
  for (var i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      /** After that I add the roman numeral and decrease 
        * num by the decimal equivalent.
        */
      romanized += roman[i];
      num -= decimal[i];
    }
  }
  return romanized;
}

convertToRoman(2014);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(500);
convertToRoman(798);
convertToRoman(3999);