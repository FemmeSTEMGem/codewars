// Create a method all which takes two params:
//     a sequence
//     a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all( arr, fun ){
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false
    }
  }
  return true
}

console.log(all([1,2,3,4,5], function(v){return v>9}))
// While my solution works fine (and a lot of other people used the same strategy), I spent way too long trying to get .forEach() to work somehow. It wasn't until I saw the other users' solutions that I found out about .every(). How is it that I've been messing around with JavaScript this long and haven't stumbled across this:
  // .every()
    // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.