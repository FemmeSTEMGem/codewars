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
// Aaaand I also just learned about Sets. As in, "function distinct(a) {return [...new Set(a)];}". Turns out, Sets can only have values appear once. So if you shove the array you're given into a new set, it will automatically remove any duplicates. Fucking brilliant.


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i == 0 || array[i] == 0) {
      newArray.push(array[i])
    }
  }
  return newArray
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
console.log(multipleOfIndex([0,2,3,6,9]))
// My solution is fine, but using .filter() would have been much more efficient, but I didn't realise that it could take multiple arguments. Cool! Good for next time.