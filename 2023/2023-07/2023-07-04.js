// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
  return "fiver".length
}

console.log(unusualFive())
// Mulled over this one for a little longer than I'd like to admit... >_>


// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  return typeof x == 'string' ? "Error" : x*50+6
}

console.log(problem(0))
console.log(problem("hi"))
// Short and sweet.