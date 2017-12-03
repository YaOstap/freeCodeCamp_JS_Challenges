/** Convert HTML Entities.
  *
  * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a 
  * string to their corresponding HTML entities.
  */

function convertHTML(str) {
	/** JavaScript doesn't have a native method for converting HTML Entities.
	  * For this task I return String global object
	  * and use chaining of replace methods with different arguments.
	  */
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");
//should return Dolce &​amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos");
// should return Hamburgers &​lt; Pizza &​lt; Tacos.

convertHTML("Sixty > twelve");
// should return Sixty &​gt; twelve.

convertHTML('Stuff in "quotation marks"');
//should return Stuff in &​quot;quotation marks&​quot;.

convertHTML("Shindler's List");
// should return Shindler&​apos;s List.

convertHTML("<>");
// should return &​lt;&​gt;.

convertHTML("abc");
// should return abc.