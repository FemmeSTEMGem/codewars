// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// Add the value "codewars" to the array websites 1,000 times.

var websites = new Array(1000).fill("codewars");

console.log(websites)
// This one took an embarassingly long time to do because I wore a groove in my brain trying to make .repeat() work. Obviously, I didn't want to insert "codewars" into the array 1,000 times because that's not efficient at all. The above is much tidier and more performant.