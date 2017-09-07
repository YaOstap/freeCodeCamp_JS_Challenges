/*Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

function bouncer(arr) {
  /** I use Array.prototype.filter method to go throw an array and the built-in 
    * Boolean function to exclude all false value from an array.
	*/
  return arr.filter(Boolean);
}


bouncer([7, "ate", "", false, 9]);
// return [7, "ate", 9].

bouncer(["a", "b", "c"]);
// return ["a", "b", "c"].

bouncer([false, null, 0, NaN, undefined, ""]);
// return [].

bouncer([1, null, NaN, 2, undefined]);
// return [1, 2].