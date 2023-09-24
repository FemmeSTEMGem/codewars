// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"


function calculator(a,b,sign){
  if (/[0-9]/.test(a) && /[0-9]/.test(b) && /[+-/*]/.test(sign)) {
    return sign == "+" ? a + b
    : sign == "-" ? a - b
    : sign == "*" ? a * b
    : a / b
  }
  return "unknown value"
}

console.log(calculator(1,2,"+"))
console.log(calculator(1,2,"&"))
console.log(calculator(1,"k","*"))
// I think I might have become slightly overzealous with my application of regex here (though, hey...it's good practice). I think my favourite version of this is the exact same as mine, but with if ((typeof a == "number") && typeof b == "number"))...I think this is much more clear. An additional happy note, while the solution wouldn't actually work in the real world for this problem, a different answer's use of "try...catch" was cool in terms of a thing I'd never heard of. :D