// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip=(d, a)=>{
  return a.sort((a, b) => d == 'R' ? a - b : b - a)
}

console.log(flip('L', [1, 4, 5, 3, 5 ]))
// I'm happy to say that this is probably the best answer. It might be a little messy having the ternary operation inside the .sort() method, but I kinda like it. If I was going for more clarity, I would probably split it up into two different .sort() methods and the ? part of the ternary operation would be whether or not the d == "R" or "L".