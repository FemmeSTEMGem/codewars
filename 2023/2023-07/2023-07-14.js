// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage
}

console.log(combat(8, 12))
// Love people using Math.max() to solve this as well. Also realized belatedly that I could just say health < damage as the ternary statement.


// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

function xor(a, b) {
  return a !== b
}

console.log(xor(true, true))
// Too simple for this level of kata, but I'm a completionist.