/** Sum All Primes.
  *
  * Sum all the prime numbers up to and including the provided number.
  *
  * A prime number is defined as a number greater than one and having only two
  * divisors, one and itself. For example, 2 is a prime number 
  * because it's only divisible by one and two.
  * The provided number may not be a prime.
  */

function sumPrimes(num) {
  // function for checking if the presented number is prime number
  function isPrime(number){
      for (i = 2; i <= number; i++){
        if(number % i === 0 && number!= i){
          return false;
        }
      }
       // if it passes the for loops conditions it is a prime and return true.
      return true;
  }
  // 1 is not a prime, we must check it.
  if (num === 1){
    // stop the recursive calls and return nothing.
    return 0;
  }
  // Check if number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from maximum number,
  // do not add anything to the answer.
    return sumPrimes(num - 1);
  }

  // Check if number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence 
  // through a recursive call to sumPrimes function.
    return num + sumPrimes(num-1);
  }
}

sumPrimes(10); // should return a number.
sumPrimes(10); // should return 17.
sumPrimes(977); // should return 73156.