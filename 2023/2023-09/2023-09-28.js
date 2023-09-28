  // Write a function that will check if two given characters are the same case.
//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

function sameCase(a, b){
  return !/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b) ? -1
    : /[a-z]/.test(a) && /[a-z]/.test(b) ? 1
    : /[A-Z]/.test(a) && /[A-Z]/.test(b) ? 1
    : 0
}

// console.log(sameCase("a", "/"))
// Of the solutions in CodeWars, I'm really liking mine the most. Though I did learn an interesting thing (more clever than useful in this context):
  // sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1
// I think I forgot that the Number value of true == 1. Clever application, though unclear in a real-world scenario.