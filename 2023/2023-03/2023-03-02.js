// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}

//? console.log(descendingOrder(12345))
// Of course, now that I look at the solutions, the (a, b) => b - a isn't necessary because we know we're only going to be dealing with single digits. So a simple, sort/reverse will make this much tidier.