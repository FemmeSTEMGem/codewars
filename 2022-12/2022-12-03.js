// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return number % 2 ? "Even" : "Odd"
}

console.log(evenOrOdd(7))


// This code does not execute properly. Try to figure out why.

function multiply(a, b){
  return a * b
}

console.log(multiply(2, 5))


// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  sum = 0
  for (const num of arr) {
    num >= 0 ? sum += num : sum += 0
  }
  return sum
}

console.log(positiveSum([1,-4,7,12]))