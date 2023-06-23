// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  let counter = 1
  for (let i = 0; i < nbPetals -1; i++) {
    if (counter == 6) {
      counter = 1
    }
    else {
      counter++
    }
  }
  return counter == 1 ? "I love you"
    : counter == 2 ? "a little" 
    : counter == 3 ? "a lot"
    : counter == 4 ? "passionately"
    : counter == 5 ? "madly"
    : "not at all"
}

console.log(howMuchILoveYou(7)) // "I love you"
console.log(howMuchILoveYou(3)) // ,"a lot")
console.log(howMuchILoveYou(6)) //"not at all")
// A combination of an array and modulo would have been far simpler - I don't know why, but I sometimes resist the use of modulo