// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(num) {
  return num <= 10 ? "Hardly any"
  : num <= 50 ? "More than a handful!"
  : num == 101 ? "101 DALMATIANS!!!"
  : "Woah that's a lot of dogs!"
}

console.log(howManyDalmations(100))
// Very happy with my solution (some people chose to keep the format the same; I prefered to change it). Sneaky trick introducing spelling errors as well.