// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  return [(2*width*height) + (2*height*depth) + (2*depth*width), width*height*depth]
}

console.log(getSize(4, 2, 6))
// More of a math problem than a coding problem; simple enought.