// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let array = []
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    array.push(i)
  }
  return array
}

console.log(pipeFix([1,3,5,6,7,8]))
// I thought for sure there must be a better way of doing this, but the other responses seem to show that this is the best solution. For clarity, I would probably save the Math.min/max(...numbers) as variables just to tidy things up a bit.


// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove (string) {
  return string.split("")[string.length - 1] == "!" ? string.split("").slice(0, -1).join("") : string
}

console.log(remove("!!Hi!!"))
// Oof, in one fell swoop I was reminded that .slice() can be used on a String as well as an Array...AND about the existence of .endsWith():
  // return string.endsWith('!') ? string.slice(0, -1) : string
