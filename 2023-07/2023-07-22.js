// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(num) {
  return num <= 10 ? "Hardly any"
  : num <= 50 ? "More than a handful!"
  : num == 101 ? "101 DALMATIANS!!!"
  : "Woah that's a lot of dogs!"
}

console.log(howManyDalmatians(100))
// Very happy with my solution (some people chose to keep the format the same; I prefered to change it). Sneaky trick introducing spelling errors as well.


// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

function position(letter){
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  return `Position of alphabet: ${alphabet.indexOf(letter) +1}`
}

console.log(position("a"))
// Welp, today I learned about .charCodeAt() which, when combined with "- 96" would give me the right answer as opposed to having to type out all the nonsense above. I was surprised... was expecting to see some answers using regex, but maybe there isn't a way to do that that's more efficient than not...