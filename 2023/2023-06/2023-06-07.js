// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12

const quarterOf = (month) => {
  return month <= 3 ? 1
  : month <= 6 ? 2
  : month <= 9 ? 3
  : 4
}

console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))
//Other solutions used Math.ceil(month/3) but I don't have the experience to kow if that's just clever or if it's Best Practices


// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// 
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
// 
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation){
  return employed && !vacation ? true : false
}

console.log(setAlarm(true, true))
console.log(setAlarm(true, false))
//After looking at the other answers, I realised I totally missed the opportunity to remove the ternary operation completely and just write "return employed && !vacation"