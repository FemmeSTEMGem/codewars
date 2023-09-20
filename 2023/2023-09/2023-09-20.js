// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
  let highest = ages.sort((a, b) => a - b)[ages.length-1]
  let lowest = ages.sort((a, b) => a - b)[0]
  return [lowest, highest, Math.abs(highest - lowest)]
}

console.log(differenceInAges([82, 15, 6, 38, 35]))
// Arg, I completely forgot about Math.max/min. Welp, this is why we do these. ^_^


// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

function pickIt(arr){
  let odd=[], even=[];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i])
  }
  return [odd,even];
}

console.log(pickIt([8,1,5,4,6,1,1]))
// The much better answer to this was "for (let x of arr)". We're going to have to move through every element in the array, so a loop that counts up that doesn't need to break at some point is needless. Of course, if the answer didn't specifically ask for a for loop, a simple arr.filter() would have sufficed and been a lot more efficient and tidy.