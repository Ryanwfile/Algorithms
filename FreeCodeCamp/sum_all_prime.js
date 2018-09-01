//Sum All Primes
//Sum all the prime numbers up to and including the provided number.
//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

isPrime = num => {//THIS FUNCTION IS NOT MY CODE it's from stack overflow https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {//this loop divides the number by every lesser integer greater than 1 to see if it produces a remainder or not 
        if(num%i === 0)//if it produces no remainder then it is NOT a prime
            return false;
    }
    return true;
}
sumPrimes = max =>{
  let primeArr = [];
  for (let i = 0; i<=max; i++){
      if(isPrime(i)){
        primeArr.push(i);
      }
  }
  let sum = primeArr.reduce((total, currentValue) => total + currentValue);
  return sum;
}
console.log(sumPrimes(977));//73156