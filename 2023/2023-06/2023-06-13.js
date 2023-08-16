// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.
// About factors

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

//     You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder

// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
  return base % factor == 0
}

// console.log(checkForFactor(24612,3)) //true
// console.log(checkForFactor(2453,5)) //false


// The function is not returning the correct values. Can you figure out why?
// 
// Example (Input --> Output ):
// 
// 3 --> "Earth"

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

function getPlanetName(id){
  let planetArray = ["Invalid entry", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
  return planetArray[id]
}

function getPlanetName(id){
  let planetObject = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune"
  }
  return planetObject[id]
}

console.log(getPlanetName(2)) //Venus
console.log(getPlanetName(5)) //Jupiter
//The original code used switch cases, which I have always found too clunky. After fixing the code issue with the switch case function, I created a shorter version which used an array. However, I think the best solution that is both short and readable (especially being able to clearly see what answer you'll get with each number) is the creation of an Object.