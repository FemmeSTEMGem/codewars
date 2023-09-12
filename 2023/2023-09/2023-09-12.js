// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(a){
  let radius = (4 * a) / (2 * Math.PI)
  return +(radius**2).toFixed(2)
}


console.log((squareArea(14.05)))
// Annoyingly, I wasn't able to find any good resources online for the geometry math, so I ended up having to look at the answers. BUT, I learned some new stuff about .toFixed() that somehow never came up before. I didn't know that it turned numbers into strings and that this can be fixed by adding "+" in front of the number you're .toFixed()'ing to. ^_^