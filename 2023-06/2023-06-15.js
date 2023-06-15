// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
  return number == 0 ? "Zero"
    : number == 1 ? "One"
    : number == 2 ? "Two"
    : number == 3 ? "Three"
    : number == 4 ? "Four"
    : number == 5 ? "Five"
    : number == 6 ? "Six"
    : number == 7 ? "Seven"
    : number == 8 ? "Eight"
    : number == 9 ? "Nine"
    : "Error"
}

console.log(switchItUp(7))
console.log(switchItUp(0))
//This or an Object would suffice. Personally, I would prefer using an Object, but I only just learned about using ternary operators this way (effectively, to replace an if/else statement), so I wanted to use it again to keep it fresh in my mind.


// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// 
// If no occurrences can be found, a count of 0 should be returned.
// 
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// 
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// 
// Notes
// 
    // The first argument can be an empty string
    // In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter){  
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(letter)) {
      counter++
    }
  }
  return counter
}

console.log(strCount('Hello', 'l'))
console.log(strCount('',      'z'))
//In the Solutions section, there's a very clever single-line solution that uses str.split(letter).length - 1 --> a lot of people labelled it "clever" and not necessarily "best practices", so I'm not sure where that solutions falls in the balance versus mine.