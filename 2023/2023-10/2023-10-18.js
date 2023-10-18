// Time to test your basic knowledge in functions! Return the odds from a list:
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
  return values.filter(x => x % 2 !== 0);
}

// console.log(odds([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
// Easy peasy. Too bad we're not in Ruby land or we could just say .iseven? or .isodd?. Though I missed the crucial bit where I could have shortened things here by just saying (x => x % 2) and left it there.


// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// function isVow(a){
//   return a.map(x => 
//     String.fromCharCode(x) == "a" || String.fromCharCode(x) == "e" || String.fromCharCode(x) == "i" || String.fromCharCode(x) == "o" || String.fromCharCode(x) == "u" ? String.fromCharCode(x) : x
//     )
// }

function isVow(a){
  return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x)
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])) //[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// Absolutely had to look up how to use regex in this instance. Totally forgot about .test()...that was all I needed. I figured out the rest on my own at least, lol.