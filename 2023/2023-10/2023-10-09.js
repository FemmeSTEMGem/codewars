// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// function cookie(x){
//   return typeof x === 'string' ? "Who ate the last cookie? It was Zach!" :
//   typeof x === 'number' ? "Who ate the last cookie? It was Monica!" :
//   "Who ate the last cookie? It was the dog!"
// }

function cookie(x){
  return `Who ate the last cookie? It was ${
    typeof x === 'string' ? 'Zach!' :
    typeof x === 'number' ? 'Monica!' :
    'the dog!'}`
}

console.log(cookie(26))
// Interestingly, the tests didn't like it when I moved the ${ down to its own line. I thought it looked cleaner there, but the code interpreted it as a new line (\n). I like my solution best because a lot of the others use repetitive code to restate the entire sentence each time.


// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
// You are given 5 variables;
//     sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
//     sharkSpeed = how fast it can move in metres/second.
//     pontoonDistance = how far you need to swim to safety in metres.
//     youSpeed = how fast you can swim in metres/second.
//     dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
//     The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//   return dolphin ? (sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed ? "Alive!" :
//   sharkDistance / sharkSpeed > pontoonDistance / youSpeed ? "Alive!"
//   : "Shark Bait!")
// }

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    return sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed ? "Alive!" : "Shark Bait!"
  }
  return sharkDistance / sharkSpeed > pontoonDistance / youSpeed ? "Alive!" : "Shark Bait!"
}

console.log(shark(7, 55, 10, 0, true))
console.log(shark(24, 0, 4, 8, true))
// I was wracking my brain trying to figure out how to make this simpler and I missed something completely obvious. Reassign the value of sharkSpeed. Basically, the exact same ternary operation but, as a gate condition, if dolphin is true sharkSpeed /= 2. I don't think I've ever used divide/equal so it just didn't occur to me, lol.