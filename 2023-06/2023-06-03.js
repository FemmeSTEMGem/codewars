// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return x.map(y => Number.parseInt(y)).reduce((x, y) => x + y)
}

console.log(sumMix([9, 3, '7', '3']))