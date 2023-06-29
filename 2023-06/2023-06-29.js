// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`
}
// This one was easy enough that I didn't bother testing it with a console.log(), lol


// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
  // ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(x => !geese.includes(x))
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])) // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]))
//Annoyingly, I had to look up "filtering an array with an array" on stackexchange, but my brain just couldn't wrap itself around which two to use of map, filter, and includes (and in what nesting order). I think it's because I've only recently started using map more and I almost never use filter or includes. I just need more exposure I guess, though it was an annoyingly simple problem/solution.