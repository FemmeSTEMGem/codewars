// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str){
//   let s = str.toLowerCase().split("").sort()
//   for (let i = 0; i < str.length; i++) {
//     if (s[i] == s[i+1]) {
//       return false
//     }
//   }
//   return true
// }

//? console.log(isIsogram("moOse"))


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// 
// Examples input/output:
// 
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// 

function XO(str) {
  let xCount = 0
  let oCount = 0
  let s = str.toLowerCase().split("")
  s.forEach((element) => {
    if (element == "x") {
      xCount +=1
    } if (element == "o") {
      oCount += 1
    }
  })
  return xCount == oCount
}

//? console.log(XO("ooom"))

//I really like this solutions a lot:

//const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }