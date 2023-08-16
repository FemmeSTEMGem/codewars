// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let string = ""
  for (let i = 1; i <= num; i++) {
    string += `${i} sheep...`
  }
  return string
}

console.log(countSheep(3))


// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//Original:
// function greet(name){
//   return "Hello, " + name + "!";
//   if(name === "Johnny")
//     return "Hello, my love!";
// }

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!"
  }
  return "Hello, " + name + "!";
}

console.log(greet("Shannon"))