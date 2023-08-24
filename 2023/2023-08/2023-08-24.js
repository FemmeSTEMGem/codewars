// Complete the function which returns the weekday according to the input number:
//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"
//     Otherwise returns "Wrong, please enter a number between 1 and 7"

let object = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday"
}

function whatday(num) { 
  return object[num] || "Wrong, please enter a number between 1 and 7"
}

console.log(whatday(1))
// Obviously there are a lot of different ways to do this. Organisationally, I like this one the best.


// I've create three functions, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2+ n2+ a2 + n2 + a2
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// Didn't run any tests for these because they're too simple...maybe too simple for the difficulty level selected, but it helps people practice some string stuff and reading error messages, so that's cool.