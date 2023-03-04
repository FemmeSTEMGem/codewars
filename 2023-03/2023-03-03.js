// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

function getMiddle(s) {
  return s.length % 2 == 0 ? s[s.length/2 - 1] + s[s.length/2] : s[(s.length - 1) / 2]
}

console.log(getMiddle("testing"))

// function getMiddle(s) {
//   return s.slice((s.length-1)/2, s.length/2+1);
// } --> This is another solution that I found. I had no idea that the slice() method uses Math.floor() to round down any float to an integer. Cool!