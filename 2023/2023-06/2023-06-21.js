// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
//     If either input is an empty string, consider it as zero.
//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  if (a == '') {a = '0'}
  if (b == '') {b = '0'}
  return (parseInt(a) + parseInt(b)).toString()
}

// console.log(sumStr("4", "")) // "9"
// console.log(sumStr("34", "5")) // "39"
// I'm a little annoyed that I didn't think of this: return String(Number(a)+Number(b)). Maybe that's what I get for trying to rush this towards the end of the day. This also took longer than it should have because I didn't read the instructions properly. -_-


// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  return Number.isInteger(n) ? n % 2 == 0 : false
}

console.log(testEven(0))
console.log(testEven(0.5))
console.log(testEven(1))
console.log(testEven(2))
console.log(testEven(-4))
// Gosh, I'm so used to avoiding the use of === (strict equals), that I completely missed the fact that it would be so perfectly useful here! --> return n%2===0