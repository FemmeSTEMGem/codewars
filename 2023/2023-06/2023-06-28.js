// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

function expressionMatter(a, b, c) {
  return [
    a+b*c,
    a+b+c,
    a*b+c,
    a*b*c,
    (a+b)*c,
    (a+b)+c,
    (a*b)+c,
    (a*b)*c,
    a+(b*c),
    a+(b+c),
    a*(b+c),
    a*(b*c),
  ].sort((a, b) => a-b).pop()
}

console.log(expressionMatter(2, 1, 2)) // 6
console.log(expressionMatter(2, 1, 1)) // 4
// There are a few here that are redundant due to BEDMAS, so if this were for real use, I would eliminate the ones that weren't needed