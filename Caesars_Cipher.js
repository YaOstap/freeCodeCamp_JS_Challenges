/** 
  * Caesars Cipher
  *
  * One of the simplest and most widely known ciphers is a Caesar cipher, 
  * also known as a shift cipher. In a shift cipher the meanings of the 
  * letters are shifted by some set amount.
  *
  * A common modern use is the ROT13 cipher, where the values of the letters 
  * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
  *  
  * Write a function which takes a ROT13 encoded string as input and returns 
  * a decoded string.
  *
  * All letters will be uppercase. Do not transform any non-alphabetic 
  * character (i.e. spaces, punctuation), but do pass them on.
  *
  */

function rot13(str) { 
  // Split str into a character array.
  str.split('');
  // An empty array is created to store the character codes.
  var caesarCipher = [];
  // Create variable for shifting value.
  var k = 13;
  // Iterate over each character in the array.
  for (var i = 0; i < str.length; i++)
    {
		// If it’s the uppercase alphabet, we’ll shift forward 13 places from its ascii code.
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90)
        {
            caesarCipher.push(String.fromCharCode(
            (((str[i].charCodeAt() - 65) + k) % 26) + 65));
        }
		// If it’s the lowercase alphabet, we’ll shift forward 13 places from its ascii code.
        else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)
        {
            caesarCipher.push(String.fromCharCode(
            (((str[i].charCodeAt() - 97) + k) % 26) + 97));
        }
		// If it’s non alphabetic characters, we return the initial value.
        else if (str[i].charCodeAt() >= 32 && str[i].charCodeAt() <= 64)
        {
            caesarCipher.push(str[i]);
        }
    }
  // Rejoin the array into a string.	
  return caesarCipher.join('');
}

rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."