// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}

console.log(nameShuffler("john McClane"))
// Confirmed with the other answers that this is straightforward and the best way to do this.


// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
// Hint for R users:
//     The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
  return a.length > b.length ? b+a+b : a+b+a
}

console.log(solution("1111", "22222"))
// Very satisfying to see that this my solution is the best answer.