// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
  return bullets / dragons >= 2 ? true : false
}

//? console.log(hero(3, 1))
// damn, > I can leave out the ternary entirely


// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// You may consider that there will not be any empty arrays/vectors.

var min = function(list){
  return list.sort((a, b) => a - b)[0]
}

var max = function(list){
  return list.sort((a, b) => b - a)[0]
}

console.log(min([6, 3, 6, 2, 7, 4, -2000]))
console.log(max([6, 3, 6, 2, 7, 4, -2000]))