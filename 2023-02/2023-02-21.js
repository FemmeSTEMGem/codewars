// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
  let newArray = []
  x.forEach(element => {
    newArray.push(element*2)
  });
  return newArray
}

console.log(maps([1, 2, 3]))

//Damn, I always forget about ".map"...so usefull -_-