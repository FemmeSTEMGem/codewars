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
