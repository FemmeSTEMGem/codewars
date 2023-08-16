// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n)
}

console.log(take([234, 564, 1, 536, 134, 234, 453, 2534, 6], 4))
// Simple enough, easy enough. :)


// The code provided is supposed replace all the dots . in the specified String with dashes
// But it's not working properly.
// Task
// Fix the bug so we can all go home early.
// Notes
// String str will never be null.

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

console.log(replaceDots("one.two.three"))
// As simple as this was, today I learned that a period is a special character in regex, so we need to escape it with a backslash (\) to treat it as a literal period. (thanks, ChatGPT!) In the solutions section I also learned that, instead of escaping with a backslash, you can just use square brackets around the period and it'll work just fine.