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
  if ((input == null) || (input.length == 0)) {
    return []
  }
  let newArray = [0, 0]
  input.forEach((element) => {
    if (element > 0) {
      newArray[0] += 1
    } else {
      newArray[1] += element
    }
  })
  return newArray
}

//? console.log(countPositivesSumNegatives(null))


// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// 
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// 
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  return array.map(element => -element)
}

//? console.log(invert([]))


// Description:
// 
// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length == 0) {
    return 0
  }
  let total = 0
  array.forEach(element => total += element)
  return total / array.length
}

//? console.log(findAverage([]))


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 
// Note: input will never be an empty string

function fakeBin(x){
  return x.split('').map(element => Math.round(element < 5 ? 0 : 1)).join('')
}

//? console.log(fakeBin("12345678"))


// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  return x.reduce((a, b) => a * b)
}

//? console.log(grow([1, 2, 3, 4]))


// Description:
// 
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 == 0 ? number*8 : number*9
}

//? console.log(simpleMultiplication(7))


// Description:
// 
// Build a function that returns an array of integers from n to 1 where n>0.
// 
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let array = []
  for (let i = n; i > 0; i--) {
    array.push(i)
  }
  return array
};

//? console.log(reverseSeq(5))


// Description:
// 
// Complete the solution so that it reverses all of the words within the string passed in.
// 
// Words are separated by exactly one space and there are no leading or trailing spaces.
// 
// Example(Input --> Output):
// 
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

//? console.log(reverseWords("The greatest victory is that which requires no battle"))


// Description:
// 
// Write function bmi that calculates body mass index (bmi = weight / height2).
// 
// if bmi <= 18.5 return "Underweight"
// 
// if bmi <= 25.0 return "Normal"
// 
// if bmi <= 30.0 return "Overweight"
// 
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmiCalc = weight/(height*height)
  return bmiCalc < 25.0 ? (bmiCalc <= 18.5 ? "Underweight" : "Normal") : (bmiCalc <= 30.0 ? "Overweight" : "Obese")
}

//? console.log(bmi(80, 1.80))