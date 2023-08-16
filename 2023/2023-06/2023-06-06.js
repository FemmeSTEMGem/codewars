// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  return d >= 7 ? (d * 40) - 50
    : d >= 3 ? (d * 40) - 20
    : d * 40
}

console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(7))
//There's a really beautiful solution where the "d*40" is at the beginning and what's subtracted is the ternary - means you don't have to repeat the d*40 a second time


// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// 
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// 
// For example, when the input is green, output should be yellow.

function updateLight(current) {
  return current == "green" ? "yellow"
      :  current == "yellow" ? "red"
      :  "green"
}

console.log(updateLight("green"))
console.log(updateLight("yellow"))
console.log(updateLight("red"))
//Also saw a clever solution that involved creating an object with keys where the values were the colour they should change to, then calling on the value of the parameter's key