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


// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
// Go on and code some pure awesomeness!

function nextId(ids){
  for (let i = 0; i < ids.length + 1; i++) {
    if (!ids.includes(i)) {
      return i
    }
  }
}

console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));
console.log(nextId([1,2,0,2,3,5]));
// I like my solution well enough, though I think I like the solutions that use "while" better:
  // function nextId(ids){
  //   var x = 0;
  //   while (ids.includes(x)) x++;
  //   return x;
  // }