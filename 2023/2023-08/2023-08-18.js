// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
// So simple I didn't even bother testing it before submitting.


// Inspired by the development team at Vooza, write the function that
//     accepts the name of a programmer, and
//     returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
  return name == "Zach" ? 18 : 0
}
// Also didn't bother testing, but the prompt made me laugh.