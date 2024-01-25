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