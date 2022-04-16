// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  let array = str.split('')
  let modifiedArray = []
  array.forEach((element) => {
    modifiedArray.push(element)
    modifiedArray.push(element)
  })
  return modifiedArray.join('')
}

console.log(doubleChar("abcd"))