// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

const areaOrPerimeter = function(l , w) {
  return l == w ? l*w : (l*2) + (w*2)
};

console.log(areaOrPerimeter(6, 10))
console.log(areaOrPerimeter(3, 3))


// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// 
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// 
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
//

function feast(beast, dish) {
  return beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1] ? true : false
}

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate ice cream"))
//In retrospect, I would prefer the use of ".slice" instead to make it more tidy