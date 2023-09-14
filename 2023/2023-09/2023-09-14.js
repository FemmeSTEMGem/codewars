// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

function howManydays(month){
return month == 2 ? 28
  : month == 4 || month == 6 || month == 9 || month == 11 ? 30
  : 31
}

console.log(howManydays(11))
// The exercise above actually wanted me to use switch statement but I find ternary operations better in most cases. A lot of people who used switch statements for their solutions didn't include "break" in their answers, which actually made their solutions pretty tidy. Still, I feel like in this case, we would want to guard against fallthrough (though I can't think of how that would happen). Happily, this also resulted in me learning about that little shortcut with switch cases (see below):
// function howManydays(month){
//   switch (month){
//     case 2: return 28
//     case 4:
//     case 6:
//     case 9:
//     case 11: return 30
//  }
//  return 31
// }