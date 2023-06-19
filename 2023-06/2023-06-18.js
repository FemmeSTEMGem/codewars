// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"

String.prototype.toAlternatingCase = function () {
  let result = ''
  for (let i = 0; i < this.length; i++) {
    this[i] == this[i].toUpperCase() ? result += this[i].toLowerCase() : result += this[i].toUpperCase()
  }
  return result
}

console.log("Hello".toAlternatingCase())
//So apparently isLowerCase() is a method...so that was cool to learn. Would have made this function a lot better. Obviously .map() would have been best. Admit I was a bit thrown off by the String.prototype.toAlternatingCase format threw me a little. I think a .map() method with a ternary operator inside with isLowerCase() would have been the perfect balance of readability and efficiency.