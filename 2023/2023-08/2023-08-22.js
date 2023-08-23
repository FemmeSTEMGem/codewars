// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  return [(2*width*height) + (2*height*depth) + (2*depth*width), width*height*depth]
}

console.log(getSize(4, 2, 6))
// More of a math problem than a coding problem; simple enough.


// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
  return a.includes(x)
}

// Didn't even bother to test, but a really good kata if people don't know about includes()...time to find out about it!