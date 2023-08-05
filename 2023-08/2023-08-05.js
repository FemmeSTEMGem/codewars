// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
  let newArray = []
  for (let i = 0; i < a.length; i++) {
    if (!newArray.includes(a[i])) {
      newArray.push(a[i])
    }
  }
  return newArray
}

console.log(distinct([4, 7, 2, 5, 3, 5, 3, 6, 2, 1, 6, 3]))
console.log(distinct([1, 1, 2]))
// Weirdy in the wrong headspace for this one. My initial strategy was to check within the array I was provided to see if it had duplicates, rather than go through each item in the provided array, and add it to a new array on the condition that it wasn't already there. Crazy simple, I've done problems like this dozens of times before...but it goes to show that your brain simply being in the wrong gear can mess you up even with the simple things. This is why we practice.