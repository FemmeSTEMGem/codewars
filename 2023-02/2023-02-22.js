// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//? console.log(greet("Shannon"))


// Clock shows h hours, m minutes and s seconds after midnight.
// 
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// 
// h = 0
// m = 1
// s = 1
// result = 61000
// 
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


function past(h, m, s){
  if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >=0 && s <= 59) { 
  return (h*3600000) + (m*60000) + (s*1000)
  } else {
    return "Check your numbers again"
  }
}

//? console.log(past(0, 1, -1))


// Implement a function which convert the given boolean value into its string representation.
// 
// Note: Only valid inputs will be given.

function booleanToString(b){
  return b.toString()
}

//? console.log(booleanToString(false))


// Given an array of integers.
// 
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// 
// If the input is an empty array or is null, return an empty array.
// Example
// 
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let newArray = input.map((element) => {
    if (true) {
      return element * 2
    }
  })
  // return newArray
}

console.log(countPositivesSumNegatives([1, 2, 3, 4]))