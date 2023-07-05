// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  let array = []
  for (let i = integer; i <= limit; i += integer) {
    array.push(i)
  }
  return array
}

console.log(findMultiples(2, 6))
// Looking at the other solutions, this one actually feels like the best. There are some clever people one-lining this one, but it's pretty unreadable.


// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
    // don't worry about uppercase vowels
    // y is not considered a vowel for this kata

function shortcut (string) {
  return string.replace(/[aeiou]/g, '')
}

console.log(shortcut("codewars"))
// Needed to go out of my way to learn some regex to do this. Pretty cool!