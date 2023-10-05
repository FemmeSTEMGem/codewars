// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.
// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// function toCsvText(array) {
//   return array.join('/n')
// }

function toCsvText(array) {
  return array.map(x => x.join(",")).join('\n')
}

console.log(toCsvText([
  [ 0, 1, 2, 3, 45 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]]))
// I had a slightly cheekier answer that forced type conversion...but that makes for unstable code. So we stick with this instead. ^_^


// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

function trueOrFalse(val){
  if (val == false) {
    return "false"
  }             
  else {
    return "true"
  }
}

function trueOrFalse(val){
  return val ? true : false
}

console.log((trueOrFalse(a>b))) // "false"
// This was a weirdly-worded kata...and a lot of the comments agree. I completed it the way the kata wanted me to, but this works far better using a ternary operator, so I did that too. Annoyingly, this is not ideal for solving in VSCode because I get hit with an error saying that 'a' is not defined. But it was simple enough to solve without having to resort to being able to test. :)