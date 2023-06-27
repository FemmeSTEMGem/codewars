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

console.log(between(1, 4))
// I went with the obvious solution and it seems like the consensus on CodeWars was that this was Best Practices. Maybe the desire to make the code more efficient is occasionally distracting me from the best answer. There were a few neat ideas like using Array.from and [...Array(b - a + 1)].map, etc. but those were flagged as Clever rather than Best Practices