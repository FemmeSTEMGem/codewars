// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
  return name ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!` : "Hello, World!"
}

console.log(hello('johN'))
// Despite how long-winded it is to make the first letter uppercase and the rest lowercase, this is the best solution.


// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return parseInt(bin, 2)
}

console.log(binToDec("1001001"))

// Absolutely had to look this up online as far as translating binary into regular numbers. I wasn't aware that parseInt could take a second argument called "radix". I'm still not super clear on what that second argument is doing, but maybe I don't super need to know for now. ^_^