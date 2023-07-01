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

console.log(square(3)) //9
//Oof, too simple for CodeWars I think