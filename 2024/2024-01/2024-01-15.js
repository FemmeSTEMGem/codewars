// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// If n == 0 return an empty sequence []

function first(arr, n) {
  return isNaN(n) ? [arr[0]] : arr.slice(0, n)
}
// The better way to do this was to change first(arr, n) to first(arr, n=1) so I could just have return arr.slice(0, n) on line 5. But I'm not in the habit of changing the functions for theings on CodeWars, so I didn't consider the possibility at all. I think mine is the next best solution without that strategy.