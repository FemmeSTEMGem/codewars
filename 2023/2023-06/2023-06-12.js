// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

console.log(hoopCount(3))
console.log(hoopCount(11))


// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return sonYearsOld * 2 < dadYearsOld ? dadYearsOld - (sonYearsOld * 2) : (sonYearsOld * 2) - dadYearsOld
}

console.log(twiceAsOld(36, 7))
//I just learned about Math.abs(), which is the perfect thing to make this a much shorter solution - it finds the difference between two numbers