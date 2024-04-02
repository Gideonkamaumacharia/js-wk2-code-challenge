//The generateArray function takes two parameters, num1 and num2, which represent the range of numbers.
//We initialize an empty array, array, to store the generated numbers.
//The for loop is used to iterate from num1 to num2, inclusive. For each iteration, the loop variable i represents the current number in the range.
//Within the loop we reassign our empty array to the value of i and print it in the console
//After the loop completes, we return the array.
//We call the generateArray function twice, once with the range (4, 7) and once with the range (-4, 7).
function generateArray(num1, num2) {
    let numbers = []
     for(let i = num1;i <= num2;i++){
      numbers = console.log(i)
     }
     return numbers
 }
 
 generateArray(4, 7)
 generateArray(-4,7)