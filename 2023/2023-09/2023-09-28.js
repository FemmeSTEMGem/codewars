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


// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
    // number of pillars (≥ 1);
    // distance between pillars (10 - 30 meters);
    // width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  return numPill >= 2 ? ((dist * (numPill - 1)*100)) + (width * (numPill - 2)) : 0
}

// console.log(pillars(11, 15, 30)) // 15270);
// Hilariously, the only reason that this one was so difficult is that I missed that we were dealing with multiple units of measure. Nice to be humbled by an 8 kyu problem in CodeWars, lol.