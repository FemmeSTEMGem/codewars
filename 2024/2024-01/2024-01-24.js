// The function giveMeFive accepts 1 parameter, obj, which is an object.
// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.
// At the end, return your array.
// You should use for..in in your code, otherwise your solution may not pass this kata.

function giveMeFive(obj){
  let array = []
  for (const key in obj) {
    if (key.length == 5) {
      array.push(key)
    }
    if (obj[key].length == 5) {
      array.push(obj[key])
    }
  }
  return array
}
// There are definitely more efficient ways of solving this problem, but it specifically called for the use of "for...in" in the solution, so at least it was a nice mental stretching of the legs. ^_^


// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.
// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.
// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
// Notes:
//     The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
//     Pay attention to the data types.
//     If the initial velocity is non-positive, the return value should be 0

function sakuraFall(v) {
  return v > 0 ? 400 / v : 0
}

console.log(sakuraFall(5))
// Just did NOT have the brain for any math anything today. Absolutely looked up the math answer so that I could sort out the code answer.