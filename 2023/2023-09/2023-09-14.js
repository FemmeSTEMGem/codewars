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


// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

console.log(usdcny(47))
// Very simple. Everyone had just about the same solution, though it varied between interpolation and concatination. I prefer interpolation; I think it's both more efficient and tidier...though maybe somewhat less readable than concatination. I still like it more despite that.