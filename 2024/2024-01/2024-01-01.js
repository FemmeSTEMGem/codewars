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


    // You have to write a function that describes Leo:
    // function leo(oscar) {
    // }
    // if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
    // if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
    // if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
    // if it was over 88 you should return "Leo got one already!"

    function leo(oscar){
      return oscar == 88 ? "Leo finally won the oscar! Leo is happy" :
      oscar == 86 ? "Not even for Wolf of wallstreet?!" :
      oscar < 88 ? "When will you give Leo an Oscar?" :
      oscar > 88 ? "Leo got one already!" :
      "You managed to pick literally the only value unaccounted for by this kata."
    }
    // Easy peasy. Though interesting that this kata didn't warn or test for the number 87, so I included by own extra bit of code at the end to account for it.