// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
  return n <= 0 ? n
  : n < 13 ? n - 1
  : n - 2
}

console.log(getRealFloor(1)) // 0
console.log(getRealFloor(15)) // 13
// There are simpler solutions, but I like mine best as a middleground between functionality and readability


// Return the Nth Even Number
// Example(Input --> Output)
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

function nthEven(n){
  return (n - 1) * 2
}

console.log(nthEven(100))
// Made my code unecessarily long by using a ternary operator for situations where n = 1, but it'll still work as shown. Simple mistake that I was able to correct once I'd thought about it for a sec. Otherwise, this is about as simple as this solution gets (though n*2-2 is the absolute simplest).