// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

function remove(string) {
  return string.replaceAll("!", "") + "!"
}

console.log(remove("!!Hi!!!!"))
//There's a slightly more efficient way to do with with regex, but I don't have a good sense yet of how well most people know regex. Does using it in a case where .replaceAll() works just fine make the code unecessarily more unreadable?