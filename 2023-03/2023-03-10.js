// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
  return s.split(" ").map(x => x.length).sort((a, b) => a - b)[0]
}

//? console.log(findShort("turns out random test cases are easier than writing out basic ones"))


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// 
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// 
// Example:
// 
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(s) {
  return s.split(" ").map(x => x.replace(x[0], x[0].toUpperCase())).join(" ")
};

//? console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
