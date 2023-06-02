// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0
  }
  return array.sort((a, b) => a - b).splice(1, array.length - 2).reduce(
    (accumulator, currentValue) => accumulator + currentValue);
}

// console.log(sumArray([6, 2, 1, 8, 10]))


// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// 
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// 
// For example(Input --> Output):

function monkeyCount(n) {
  let monkeys = []
  for (let i = 1; i <= n; i++) {
    monkeys.push(i)
  }
  return monkeys
}

console.log(monkeyCount(5))