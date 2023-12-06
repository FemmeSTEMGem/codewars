// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
// You can assume the input will always be a number.

function validateCode (code) {
  return /^[123]/.test(code)
}
// I really need to learn the ".test" for regex because I absolutly had to search around the internet to get this solution.


// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power) {
  var result = 1;
  for (let i = 0; i < power; ++i)
      result *= number;
  return result;
}
// Again, another math rather than logic problem. Had to do a lot of annoying mathy thinking rather than just solving it straight with Math.pow or eval() or **.