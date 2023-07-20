// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
  return queue[queue.length - 1] == "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - queue.indexOf("wolf")-1}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) // 2
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))
// It completely didn't occur to me to reverse the array (especially since I had originally misunderstood the the subject's position is to the right of the array, not to the left...so reversing would have made for a bit less code)

