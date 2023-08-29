// Find the sum of all multiples of n below m
// Keep in Mind
//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
  let sum = 0
  for (let i = 1; n*i < m; i++) {
    sum += n*i
  }
  return sum || 'INVALID'
}

console.log(sumMul(0, 0))
// Fairly tidy. I think I like my solution best. The shorter solutions are a little too muddled for a human to read easily I think.


// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
//     left - The current floor of the left elevator
//     right - The current floor of the right elevator
//     call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0-2.
// Examples:
// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

function elevator(left, right, call){
  return Math.abs(left - call) < Math.abs(right - call) ? "left" : "right"
}

console.log(elevator(0, 1, 1))
// Tidy and efficient. Oh yeah. :)