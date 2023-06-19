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


// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

console.log(Kata.getVolumeOfCuboid(1,2,2)) // 4
console.log(Kata.getVolumeOfCuboid(6,2,5)) // 60
// Nothing much to this one, though I did appreciate the few answers I saw that gave gate conditions for various scenarios where things could go wrong...i.e. parameter given is NaN or < 0. Other than that, a very straightforward exercise.