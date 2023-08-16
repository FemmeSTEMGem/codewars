// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let goodIdeas = x.filter(x => x == "good").length
  return goodIdeas == 0 ? "Fail!"
  : goodIdeas <= 2 ? "Publish!"
  : "I smell a series!"
}

console.log(well(['bad', 'bad', 'bad', 'good', 'good', 'good']))
// Very happy to see that my solution is likely the best. *little dance*


// Write a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// - The string should start with a 1.
// - A string with size 6 should return :'101010'.
// - With size 4 should return : '1010'.
// - With size 12 should return : '101010101010'.
// - The size will always be positive and will only use whole numbers.

function stringy(size) {
  return size % 2 == 0 ? "10".repeat(size/2) : "10".repeat(size/2) + "1"
}

console.log(stringy(5))
// I really like my solution, though looking through the others, I really like the use of padStart to one-line this. It's a lot cleaner too, but I didn't know that padStart would return partial strings in the way that this problem requires. Awesome!