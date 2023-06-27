// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let array = []
  for (let i = a; i <= b; i++) {
    array.push(i)
  }
  return array
}

// console.log(between(1, 4))
// I went with the obvious solution and it seems like the consensus on CodeWars was that this was Best Practices. Maybe the desire to make the code more efficient is occasionally distracting me from the best answer. There were a few neat ideas like using Array.from and [...Array(b - a + 1)].map, etc. but those were flagged as Clever rather than Best Practices


// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  return array.map(x => 
    Number.isInteger(Math.sqrt(x)) ? (Math.sqrt(x)) : x*x
  )
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))
// This one plagued me for too long because I misunderstood what the question was asking for. Very easy once I got it.