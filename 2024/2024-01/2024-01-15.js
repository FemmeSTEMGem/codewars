// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// If n == 0 return an empty sequence []

function first(arr, n) {
  return isNaN(n) ? [arr[0]] : arr.slice(0, n)
}
// The better way to do this was to change first(arr, n) to first(arr, n=1) so I could just have return arr.slice(0, n) on line 5. But I'm not in the habit of changing the functions for theings on CodeWars, so I didn't consider the possibility at all. I think mine is the next best solution without that strategy.


// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
// A Pythagorean Triple consists of arranging 3 integers, such that:
// a2 + b2 = c2
// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
// Return Values
//     For JavaScript: return true or false

function isPythagoreanTriple(integers) {
  return integers[0]**2 + integers[1]**2 == integers[2]**2 ? true
  : integers[1]**2 + integers[2]**2 == integers[0]**2 ? true
  : integers[2]**2 + integers[0]**2 == integers[1]**2 ? true
  : false
}
// Annoyingly, this is a math problem, not a coding problem. The best answer was:
  // function isPythagoreanTriple(nums) {
//   const [a,b,c] = nums.sort((a,b) => a - b)
//   return a**2 + b**2 === c**2
// }
// I don't see how sorting it would help, but there you are. -_-