// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// var summation = function (num) {
//   let sum = 0
//   for (let i = 1; i <= num; i++) {
//     sum += i
//   }
//   return sum
// }

// console.log(summation(8))


// // Remove String Spaces
// // Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//   return x.replace(' ', '')
// }

// console.log(noSpace("Hello hello hello"))


// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1601))