// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
//     You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.

function plural(n) {
  return n !== 1
}

console.log(plural(0))
// Was almost considring a ternary operator solution, but then rememered there's a way to make it even shorter. :)


// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
  let array = []
  for (let i = 0; i <= one.length; i++) {
    array.push(one[i])
    array.push(two[i])
    array.push(three[i])
  }
  return array.join("")
}

console.log(tripleTrouble("LLh","euo","xtr"))
// One solution used .map in a way I didn't understand (two parameters instead of one), but it was voted far more that it was clever rather than best practices, so I'm not super concerned that I found it confusing. The solution I liked best was a simplified version of mine. Rather that pushing into an array, I forgot that I could have just created a variable that equaled an empty string, then +='d new things into it. So they ended up with "result =+ one.charAt(i) + two.charAt(i) + three.charAt(i)"...which I think is a little tidier.