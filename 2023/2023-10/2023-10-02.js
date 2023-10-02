// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
// Write a function that takes the website date/time in its original string format and returns the shortened format.
// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 
// Output
// Output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(","))
}

console.log(shortenToDate("Tuesday January 29, 10pm"))
//The more clever version of this answer is return longDate.split(",")[0]. Buuuut, my favourite which is both succinct and incredibly clear is this one:
//function shortenToDate(longDate) {
  // const [date, time] = longDate.split(',');
  // return date;
// }


// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
// Example:
// combineNames('James', 'Stevens')
// returns:
// 'James Stevens'

function combineNames(first, last) {
  return `${first} ${last}`
}

console.log(combineNames('James', 'Stevens'))
// Very simple kata, though I saw a clever thing that I liked (though impractical for this exercise). It was const combineNames = (...names) => names.join(' '). Not good because there's no way to know how many arguments the function should receive...but maybe kinda good if you include a comment about it since this would also work for multiple names to fit in the argument. I take it back. I think I like this solution better for that flexibility.