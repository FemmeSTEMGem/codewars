// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  return str.split(" ").map(x => `${x} ${x.length}`)
}

console.log(addLength("apple ban"))
// Glad I found the simplest/best solution. Glad I've become more and more comforable using .map when I wasn't before.


// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
// If the tail is right return true, else return false.
// The arguments will always be non empty strings, and normal letters.

function correctTail(body, tail) {
  sub = body.substr(body.length-(tail.length))
  if (sub = tail) {
    return true
  }
  else {
    return false
  }
}

function correctTail(body, tail) {
  return body.endsWith(tail)
}

console.log(correctTail("Fox", "x"))
// First function is correcting the format of the supplied function. Second is my refactoring to make the function better. Used .charAt() at first, but then found .endsWith() and that just simplifies things even better. Chef's kiss.