// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString[0])
}

// console.log(getAge("4 years old"))
//Found out through the other answers that the [0] is redundant and works just fine without it. Cool!


// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// 
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// 
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// 
    // S is misinterpreted as 5
    // O is misinterpreted as 0
    // I is misinterpreted as 1
// 
// The test cases contain numbers only by mistake.

function correct(string) {
	return string.replaceAll(5, "S").replaceAll(1, "I").replaceAll(0, "O")
}

console.log(correct("BUDAPE5T"))
console.log(correct("PAR15"))
console.log(correct("51NGAP0RE"))
// I wasn't sure, but it's cool to see that .replaceAll() doesn't mind being strung together. Another answer I saw that I think I liked more was turning the corrections into an Object. I like it better because you can more easily see what's being fixed...especially if the number of corrections ever needed to be increased.