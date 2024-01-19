// Create a function that finds the integral of the expression passed.
// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
// Notes:
//     The output should be a string.
//     The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent+1)}x^${exponent+1}`
}
// Might be a bit tidier with + instead of ${}, but this is fine, I think.


// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.
// Please note the following:
//     When a is close to b, return 0.
//         For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
// Otherwise...
//     When a is less than b, return -1.
//     When a is greater than b, return 1.
// If margin is not given, treat it as if it were zero.
// Assume: margin >= 0

function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}
// I was trying to hard to shoehorn this into a ternary operator thingy, but my brain won't do it. I'm officially out of juice for the day and I don't care about the mental exercise enough to force it. Blehhhhhh.