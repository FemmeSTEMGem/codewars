// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

// Examples:
// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
// 
// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name == "Santa Claus" && password == "Ho Ho Ho!"
};

// Easy peasy. Though the syntax is clearly older and gave me pause about whether or not I'd be able to write out the solution the way I'm used to. I wonder if it's worth it to look into this older syntax for the purposes of having to interact with legacy code.


// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
// Function:
// getNumberFromString(s)

function getNumberFromString(s) {
  return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''))
}

console.log(getNumberFromString("hell5o wor6ld"))
// Got bogged down on this one because the language switched to Haskell and I just assumed that it was a really old way of writing Javascript. Once I figured that out, it was pretty okay. I struggled for a while to figure out how to writ this using regex and just gave up. But, in the solutions, I found a cool new thing in regex where you can just be like "hey, filter for digits!". Super cool:
  // return +s.replace(/\D/g, "");