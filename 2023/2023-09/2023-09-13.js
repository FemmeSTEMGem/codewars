// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

function nearestSq(n){
    return Math.round(Math.sqrt(n))**2
}

// console.log(nearestSq(144))
// One of the answers that I didn't think of was using Math.pow(Math.round(Math.sqrt(n), 2)...but that seems slightly more clunky than mine since you still need some stuff at the end. I also saw Math.round(n**.05)**2, but I think that one might make it less clear what's going on...but that might because math solutions don't come as naturally to me.


// Remove all exclamation marks from the end of sentence.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
  let slicePosition = 0
  for (let i = string.length - 1; i > -1; i--) {
    if (string[i] == "!") continue
    else {
      slicePosition = i + 1
      break
    }
  }
  return string.slice(0, slicePosition)
}

console.log(remove("!Hi!!"))
// My solutions is way too embarassingly long. The best loop to use would have been "while" and just reassigning the value of "s" each time you remove a "!". The best answer overally, though, is a regex one. Gosh, I need to keep learning this. The regex answer is simply s.replace(/!+$/, ''). The breakdown is:
// '!' - matches the character '!' with index literally (case sensitive)
// '+' - matches the previous token between 1 and unlimited times, as many times as possible, giving back as needed
// '$' - asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
// https://regex101.com/r/Zq6eZJ/1