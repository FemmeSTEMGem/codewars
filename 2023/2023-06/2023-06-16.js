// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
  let resultsArray = [humanYears]
  humanYears <= 1 ? resultsArray.push(15, 15)
    : humanYears <= 2 ? resultsArray.push(24, 24)
    : resultsArray.push(24 + (4 * (humanYears - 2)), 24 + (5 * (humanYears - 2)))
  return resultsArray
}

// console.log(humanYearsCatYearsDogYears(2)) // [2,24,24]
// console.log(humanYearsCatYearsDogYears(10))// [10,56,64]
// I learned that you an put a ternary operation inside an array - though the best way to do this was to just return the correct array for the first two scenarios (humanYears = 1 --> [1, 15, 15], etc.), then do a return statement with the mathy line for the final scenario


// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!

function oddCount(n){
  return Math.floor(n/2)
}

console.log(oddCount(15)) //7
console.log(oddCount(15023)) // 7511
//I really liked this exercise because they warned at the beginning that we'd have to deal with very large numbers. Those larger number tests cause your code to time out if you use inefficient code (a for loop, for example)...which I absolutely did before reexamining the problem and realizing that there was a much simpler solution.