// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// Make sure to round off the result to two decimal points.
// Some useful associations relevant to this kata:
//     1 Imperial Gallon = 4.54609188 litres
//     1 Mile = 1.609344 kilometres

function converter (mpg) {
  return +(mpg * .354006043538).toFixed(2)
}

console.log(converter(10))
// 3.54


// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
}