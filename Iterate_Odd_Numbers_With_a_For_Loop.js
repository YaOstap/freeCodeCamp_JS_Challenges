// Iterate Odd Numbers With a For Loop

/**
  *Instructions
  *Push the odd numbers from 1 through 9 to myArray using a for loop.
  * You should be using a for loop for this.
  * MyArray should equal [1,3,5,7,9].
  */


// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

/** My solution is using in the "for loop" additional "if" statement
  * with % operand to eject even numbers.
  */
for (var i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        myArray.push(i);
    }
}

// Only change code below this line.
