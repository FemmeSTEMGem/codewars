// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// console.log(animal({name:"dog",legs:4,color:"white"}))
// Easy peasy. Love objects. ^_^


// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  return s.replaceAll(/[0-9]/g, "")
}

console.log(stringClean("(E3at m2e2!!)"))
// I was able to get the regex almost correct from memory. The only things I was missing were the square brackets. I saw someone do something different with their regex: s.replace(/\d/g, ""); but I think I like mine more for the clarity...but \d is just "digits" so maybe I just prefer the square brackets way because I'm not as familiar with regex.