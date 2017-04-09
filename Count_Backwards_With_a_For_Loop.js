/**
 * Count Backwards With a For Loop
 *
 *Instructions
 *Push the odd numbers from 9 through 1 to myArray using a for loop.
 *
 *You should be using a for loop for this.
 *
 * myArray should equal [9,7,5,3,1].
 */

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

** My solution is using in the "for loop" additional "if" statement
* with % operand to eject even numbers.
*/
for (var i = 10; i > 0; i--) {
    if (i % 2 !== 0) {
        myArray.push(i);
    }
}