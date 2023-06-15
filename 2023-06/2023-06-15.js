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