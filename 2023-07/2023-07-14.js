// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage
}

console.log(combat(8, 12))
// Love people using Math.max() to solve this as well. Also realized belatedly that I could just say health < damage as the ternary statement.