// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  return arr.includes(item)
}

console.log(include([1,2,4,5], 3))
// Easy peasy use of the .includes() method :)


// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

function  calculateAge(birthYear, currentYear) {
  return birthYear < currentYear ? (currentYear-birthYear == 1 ? `You are 1 year old.` : `You are ${currentYear-birthYear} years old.`)
  : birthYear > currentYear ? (birthYear-currentYear == 1 ? `You will be born in 1 year.` : `You will be born in ${birthYear-currentYear} years.`)
  : `You were born this very year!`
}

console.log(calculateAge(2010, 1990))
  // The only thing I would change about this that I'm a little on the fence about is how to handle plural vs singular year(s). I was originally considering something like `You are ${currentYear-birthYear} year${currentYear-birthYear == 1 ? s : ''} old.`, but I was worried that it would look too fucky and be too difficult to understand what was happening. I opted for a longer but clearer version. Still not sure where the line is between readibility and efficient code on this one.