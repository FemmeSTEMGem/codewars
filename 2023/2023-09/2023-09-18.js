// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

function twoDecimalPlaces(n) {
  return +n.toFixed(2)
}
// I like my solution best. And it was nice to be re-reminded that .toFixed() turns the result into a String AND that you can counter that with a '+' in front of everything. *chefs kiss*


// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price){
  return (quantity - Math.floor(quantity/3)) * price
}

console.log(mango(9, 5))
// It looks like my answer is with the tidiest solutions. The question is phrased a bit strangely, though. A bunch of people in the comments seemed to feel similarly. Got there eventually, though! :)