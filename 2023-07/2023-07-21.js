// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
  return string.split(" ").reverse().join(" ")
}

console.log(reverse('I am an expert at this'))
// Simple and straightforward


// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// Task
// Implement a function named
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
//     min < max
//     step > 0
//     the range does not HAVE to include max (depending on the step)

function generateRange(min, max, step){
  let array = []
  for (let i = min; i <= max; i += step) {
    array.push(i)
  }
  return array
}

console.log(generateRange(1, 10, 3))
// I'm not super familiar with using "new Array" or "Array.from", but I had a poke at it after coming up with the answer above. It didn't work, so I submitted my original answer and checked the other solutions on CodeWars. No one used "new Array", so I'm not sure that it works the way I was hoping. A few people used "Array.from", but the solutions seemed messy and hard to read - and all were voted as Clever, rather than Best Practices, so I think my answer is still the right strategy. One interesting note, someone managed to condense the above even further by putting the array in the loop statement. I wondered at first why I never knew that this type of loop could be written this way...then I realized that it only works with "var" (it won't work with const or let), so maybe it's best not to use this strategy after all - see below:

// function generateRange(min, max, step) {
//   for (var res = []; min <= max; min += step) res.push(min)
//   return res
// }