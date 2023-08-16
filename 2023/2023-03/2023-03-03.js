// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

function getMiddle(s) {
  return s.length % 2 == 0 ? s[s.length/2 - 1] + s[s.length/2] : s[(s.length - 1) / 2]
}

//? console.log(getMiddle("testing"))

// function getMiddle(s) {
//   return s.slice((s.length-1)/2, s.length/2+1);
// } --> This is another solution that I found. I had no idea that the slice() method uses Math.floor() to round down any float to an integer. Cool!


// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let array =  []
  for (let i = 0; i < s.length; i++) {
    array.push(s[i].toUpperCase())
    for (let r = 0; r < i; r++) {
      array.push(s[i].toLowerCase())
    }
    array.push("-")
  }
  return array.join("").slice(0, -1)
}

//? console.log(accum("ZpglnRxqenU"))

// Man, this is tricky if you're not aware of .repeat() or the Array object >_>