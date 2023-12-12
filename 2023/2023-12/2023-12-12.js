// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}

// console.log(_if(true, function(){console.log("True")}, function(){console.log("false")}))
// I think my head's been in Ruby land lately, because I was frustrated when my function wouldn't work. Realized after that I forgot to include () next to the function...so the way I had it written just referred to the function but didn't actually run it. ^_^


// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// Task: Given an array of Player objects and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

class Player {
  constructor(name) {
  this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  return players[(goose-1) % players.length].name
}

console.log(duckDuckGoose(players, 1))
console.log(duckDuckGoose(players, 5))
console.log(duckDuckGoose(players, 4))
// This was definitely challenging in ways that weren't necessary. First, ending it with .name wasn't obvious until you looked at the tests to realize that they created a class with a constructor. As a mathy challenge, it definitely would have been helpful to know about modular arithmetic beforehand, lol.