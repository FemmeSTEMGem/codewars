// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
  return a.reduce((x, y) => x + y**2, 0) > b.reduce((x, y) => x + y**3, 0)
}

console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))
// I was having trouble getting the .reduce() method to work because I misunderstood how it works. I was accidentally squaring/cubing both the x and y when it should only have been y because the x is the accumulator. Once I got that, I updated my function and this is probably the most efficient solution (interestingly, my original wrong function worked for the majority of the test questions, just from pure happenstance, lol).