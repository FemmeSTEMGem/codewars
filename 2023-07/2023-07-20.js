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


// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  let b = n /= Math.pow(10, n.toString().split("").length)
  if (n < 0) {
    n = Math.abs(n)
    return Math.abs(Math.round(b *= Math.pow(10, b.toString().split("").length - 2))) * -1
  }
  return Math.round(b *= Math.pow(10, b.toString().split("").length - 2))
}

console.log(noBoringZeros(-1050))
// Ugh, this one fucked me up way more than it had any right to. The most popular solution was using .replace() with regex...which I'm super not familar with. Might be worth learning? No idea what the prevailing wisdom is on that. The second best solution required more math-specific problem solving than coding-specific problem solving. That is to say, the best answer that didn't use regex imo was using a while statement coupled with n%10 == 0. I think I would have gotten it faster if I'd have thought about it as more of a math problem than a coding problem. My first instinct to use a loop was on the right track, but I was converting each digit of the number into an element in an array so that I could sort through it that way. After that seemed to take too much coding, I guessed (correctly) that I was going about it the wrong way. But when I went to a more "mathy" solution, the relic of splitting the number up into strings in an array came with it and coloured my approach to the problem. Judging by the comments, I'm not the only one weirdly stumped by this problem...just coming up with weird and inelegant solutions.