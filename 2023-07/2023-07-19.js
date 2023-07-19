// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?

function addFive(num) {
  return num + 5
}

console.log(addFive(5))
// Easy peasy - too easy for this kata level


// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  let array = (arr1 + "," + arr2).split(",").map(x => Number.parseInt(x)).sort((a, b) => a-b)
  let uniqueChars = array.filter((num, index) => {
    return array.indexOf(num) == index
  })
  return uniqueChars
}

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))
// So excited to learn some new things from this one!
  // First: .filter() can be done with multiple arguments - I still don't really understand how the above works, but I know that it does and I can always ask ChatGPT for further clarification if I want.
  // Second: I learned abobut Set. A lot of people used either Array.from(new Set...) or [...new Set...] to create their solution. "Set" is an object that lets you store unique values of any type. This means that, if you're creating a new array using "Set", it will automatically remove any duplicates
  // Third: Stumbled across a way of doing this problem that I didn't even think of. That is, filtering arr1 first by whether or not arr2 .includes() that number already. SO much simpler. Than you just concat the two arrays together, sort, and you're done!