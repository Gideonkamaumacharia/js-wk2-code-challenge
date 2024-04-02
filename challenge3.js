function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }}
    // We define a function isPrime(number) that checks whether a given number is prime or not. It takes a single parameter number which represents the actual number to be checked.
    //The if (number < 2) condition checks if the number is less than 2. Since prime numbers are defined as numbers greater than 1, any number less than 2 cannot be prime. In such cases, the function immediately returns false.
    //The for  loop is used to check if the number is divisible by any number other than 1 and itself.
    //the condition if (number % i === 0) checks if the given number is divisible evenly by the current value of i and If it is, the function returns false.
    //If no divisors are found within the loop, the function reaches the end and returns true, indicating that the number is prime


    function filterPrimes(numbers) {
        const primeNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
          if (isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
          }
        }
        return primeNumbers;
      }
   
    //In our second function the filter method creates a new array by iterating through each element of the input array (numbers) and applying a filtering condition ie isPrime().
    //isPrime() is called on each element in the array and if its prime its included in the resulting array and the vice versa.
    //Finally, the filterPrimes function simply returns the resulting array obtained by applying the filter method to the numbers array, passing in the isPrime function as the filtering condition.