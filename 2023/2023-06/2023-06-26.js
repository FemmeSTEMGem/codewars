// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  return newArray;
}

console.log(createArray(1)) // [1]
// Easy peasy fix. Not much to say re: the other solutions...unless you wanted to redo the function itself.


// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort().shift().replaceAll('', "***").slice(3, -3)
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // 'b***i***t***c***o***i***n' );
// Whoops, should have just done a split/join. Doing this in a rush was not ideal. >_>