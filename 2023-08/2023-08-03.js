// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n)
}

console.log(take([234, 564, 1, 536, 134, 234, 453, 2534, 6], 4))
// Simple enough, easy enough. :)