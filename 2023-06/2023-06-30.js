// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs 	price per unit (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n){
  return n < 5 ? n*100
  : n >=5 && n < 10 ? n*95
  : n * 90
}

// console.log(saleHotdogs(5))
// I've really grown to love chaining ternary operations this way. If I were to do it over, I might structure it like --> n * (n < 5 ? 100), etc. - might make it look tidier, I'm not sure


// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  return position + roll * 2
}

// console.log(move(3, 6))
// Simple enough, nothing fancy here.


// Write a function that takes an argument and returns the square of it.

function square (n){
  return n**2
}

// console.log(square(3)) //9
//Oof, too simple for CodeWars I think


// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
  return arr.reverse()
}

console.log(fixTheMeerkat(["tail", "body", "head"])) // ["head", "body", "tail"]
// Simple use of the reverse() method




// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.split('').filter(x => x == x.toUpperCase()).length == this.length
}

// console.log('c'.isUpperCase()) // false
// console.log('C'.isUpperCase()) // true

console.log("Hello".split('').filter(x => x == x.toUpperCase()))
// For some reason I had it in my head that .toUpperCase() could only be used on individual letters rather than a whole string...hence the solution above. Now remembering, I could have just said this == this.toUpperCase()