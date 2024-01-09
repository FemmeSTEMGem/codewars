// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get info() {
    return `${this.name}s age is ${this.age}`
  }
}
// Definitely had to refresh myself on Classes in order to do this one.


// In this Kata you should fix/create a program that returns the following values:
//     false/False if either a or b (or both) are not numbers
//     a % b plus b % a if both arguments are numbers
// You may assume the following:
//     If a and b are both numbers, neither of a or b will be 0.
// Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.
// Fixed function:
function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    return false;
  } else {
    return (a % b) + (b % a)
  }
}
// Optimized function:
function myFirstKata(a, b) {
  return typeof a !== "number" || typeof b  !== "number" ? false : (a % b) + (b % a)
}
// Nice little stroll around the block.