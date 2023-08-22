// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param){
  let fixedParam = param.toLowerCase()
  return fixedParam == "jabroni" ? "Patron Tequila"
  : fixedParam == "school counselor" ? "Anything with Alcohol"
  : fixedParam == "programmer" ? "Hipster Craft Beer"
  : fixedParam == "bike gang member" ? "Moonshine"
  : fixedParam == "politician" ? "Your tax dollars"
  : fixedParam == "rapper" ? "Cristal"
  : "Beer"
}

console.log(getDrinkByProfession("pOLitiCIaN"))
// There's actually a slightly better version of this that I like more. Intead, they stored the table as an object, then returned the right drink based on the profession, and using an or statement if the profession wasn't "true". Perfect. :)