// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
  return numbers.filter(x => x % divisor == 0)
}

console.log(divisibleBy([1,2,3,4,5,6], 2)) // [2,4,6]
console.log(divisibleBy([1,2,3,4,5,6], 3)) // [3,6]


// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same a"backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama"

function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome("Bob")) // true
console.log(isPalindrome("Madam")) // true
// I'm glad that I remembered that I don't have to turn true/false outputs into ternary operations. I really liked someone's soluti0on that looked like this: return str === [...str].reverse().join('') - Chef's kiss