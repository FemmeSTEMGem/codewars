// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  return sentence.toLowerCase().includes("english")
}

console.log(spEng("abcnEnglishsef"))
// Easy enough, though for some reason I had it in my head that .includes() was exclusive to arrays, but I must have been thinking about a different method.


// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  return arr.sort((a, b) => b - a).map((x, y) => x - arr[y + 1] || 0).reduce((c, d) => c + d, 0)
}

console.log(sumOfDifferences([2, 1, 10]))
// I'll admit, I absolutely had to go to the solutions for this one. A bit embarassing. Definitely one of those "more of a math problem than a coding problem" things. I had the right shape of the solution; just didn't quite get the right things in place for .map() and .reduce(). The better solution was just taking the largest number in the array and subtracting the smallest number in the array. Must faster and more efficient code. Ugh.