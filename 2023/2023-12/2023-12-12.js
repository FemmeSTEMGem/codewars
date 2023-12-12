// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}

console.log(_if(true, function(){console.log("True")}, function(){console.log("false")}))
// I think my head's been in Ruby land lately, because I was frustrated when my function wouldn't work. Realized after that I forgot to include () next to the function...so the way I had it written just referred to the function but didn't actually run it. ^_^