// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.
// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
let solution = ''
for (let i = 1; i < 10; i++) {
  solution += `${i} * ${number} = ${i * number}\n`
}
solution += `10 * ${number} = ${10 * number}`
return solution
}

console.log(multiTable(5))
// Someone had a slightly more elegant solution to the issue of not having \n at the end of the last line. Instead, they turned the last part of the "for" statement into a ternary operation...where they asked if i == 10. If not, it added \n to the end. If not, just an empty string. Love it.