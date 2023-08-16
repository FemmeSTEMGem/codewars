// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// Examples:
// 3 needs to become $3.00
// 3.1 needs to become $3.10

function formatMoney(amount){
  return `$${amount.toFixed(2)}`
}

console.log(formatMoney(3.55))
// I had to look up .toFixed() but I knew something had to exist that did what it does. Easy peasy after that. :)


// Find the mean (average) of a list of numbers in an array.

function findAverage(nums) {
  return nums.reduce((a, b) => a + b, 0)/nums.length
}

console.log(findAverage([1, 3, 5, 7]))
// The .reduce() function likely has a lot of uses; it just happens to be handy for adding all elements in an array together. I'd like to know the other common use cases at some point because it seems potentially powerful but I don't know how yet.