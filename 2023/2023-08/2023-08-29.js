// Find the sum of all multiples of n below m
// Keep in Mind
//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
  let sum = 0
  for (let i = 1; n*i < m; i++) {
    sum += n*i
  }
  return sum || 'INVALID'
}

console.log(sumMul(0, 0))
// Fairly tidy. I think I like my solution best. The shorter solutions are a little too muddled for a human to read easily I think.