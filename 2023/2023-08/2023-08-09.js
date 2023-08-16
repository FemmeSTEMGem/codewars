// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
  return a.reduce((x, y) => x + y**2, 0) > b.reduce((x, y) => x + y**3, 0)
}

console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))
// I was having trouble getting the .reduce() method to work because I misunderstood how it works. I was accidentally squaring/cubing both the x and y when it should only have been y because the x is the accumulator. Once I got that, I updated my function and this is probably the most efficient solution (interestingly, my original wrong function worked for the majority of the test questions, just from pure happenstance, lol).


// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice * discount/Math.pow(100, 1)))
}

console.log(dutyFree(12, 50, 1000))
// This was much more a math problem than a coding problem. The issue I was focusing on was how to get the discount expressed the way I would normally do it on a calculator (that is, multiply by 0.10 to figure out a 10% discount). However, the most efficient answer was Math.floor(hol / normPrice / discount * 100) - nice and simple. I think the only way to get better at these kinds of problems is to keep practicing them until you're able to spot familiar patterns.